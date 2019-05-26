export default class Sha1{
    hash(msg:string, utf8encode:boolean): string {
        utf8encode =  (typeof utf8encode == 'undefined') ? true : utf8encode;
  
        // convert string to UTF-8, as SHA only deals with byte-streams
        if (utf8encode) msg = this.encode(msg);
        
        // constants [§4.2.1]
        let K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
        
        // PREPROCESSING 
        
        msg += String.fromCharCode(0x80);  // add trailing '1' bit (+ 0's padding) to string [§5.1.1]
        
        // convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
        let l = msg.length/4 + 2;  // length (in 32-bit integers) of msg + ‘1’ + appended length
        let N = Math.ceil(l/16);   // number of 16-integer-blocks required to hold 'l' ints
        let M = new Array(N);
        
        for (let i=0; i<N; i++) {
          M[i] = new Array(16);
          for (let j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
            M[i][j] = (msg.charCodeAt(i*64+j*4)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16) | 
              (msg.charCodeAt(i*64+j*4+2)<<8) | (msg.charCodeAt(i*64+j*4+3));
          } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
        }
        // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
        // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
        // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
        M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32); M[N-1][14] = Math.floor(M[N-1][14])
        M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;
        
        // set initial hash value [§5.3.1]
        let H0 = 0x67452301;
        let H1 = 0xefcdab89;
        let H2 = 0x98badcfe;
        let H3 = 0x10325476;
        let H4 = 0xc3d2e1f0;
        
        // HASH COMPUTATION [§6.1.2]
        
        let W = new Array(80); let a, b, c, d, e;
        for (let i=0; i<N; i++) {
        
          // 1 - prepare message schedule 'W'
          for (let t=0;  t<16; t++) W[t] = M[i][t];
          for (let t=16; t<80; t++) W[t] = this.ROTL(W[t-3] ^ W[t-8] ^ W[t-14] ^ W[t-16], 1);
          
          // 2 - initialise five working variables a, b, c, d, e with previous hash value
          a = H0; b = H1; c = H2; d = H3; e = H4;
          
          // 3 - main loop
          for (let t=0; t<80; t++) {
            let s = Math.floor(t/20); // seq for blocks of 'f' functions and 'K' constants
            let T:any = (this.ROTL(a,5) + this.f(s,b,c,d) + e + K[s] + W[t]) & 0xffffffff;
            e = d;
            d = c;
            c = this.ROTL(b, 30);
            b = a;
            a = T;
          }
          
          // 4 - compute the new intermediate hash value
          H0 = (H0+a) & 0xffffffff;  // note 'addition modulo 2^32'
          H1 = (H1+b) & 0xffffffff; 
          H2 = (H2+c) & 0xffffffff; 
          H3 = (H3+d) & 0xffffffff; 
          H4 = (H4+e) & 0xffffffff;
        }
      
        return this.toHexStr(H0) + this.toHexStr(H1) + 
          this.toHexStr(H2) + this.toHexStr(H3) + this.toHexStr(H4);
    }

    ROTL(x:any, n:any): any {
        return (x<<n) | (x>>>(32-n));
    }

    f(s:any, x:any, y:any, z:any): any {
        switch (s) {
            case 0: return (x & y) ^ (~x & z);           // Ch()
            case 1: return x ^ y ^ z;                    // Parity()
            case 2: return (x & y) ^ (x & z) ^ (y & z);  // Maj()
            case 3: return x ^ y ^ z;                    // Parity()
            }
    }

    toHexStr(n:any): any {
        let s="", v;
        for (let i=7; i>=0; i--) { v = (n>>>(i*4)) & 0xf; s += v.toString(16); }
        return s;
    }

    encode(strUni:string):string {
        // use regular expressions & String.replace callback function for better efficiency 
        // than procedural approaches
        let strUtf = strUni.toString().replace(
            /[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
            function(c:any) { 
            let cc = c.charCodeAt(0);
            return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f); }
        );
        strUtf = strUtf.toString().replace(
            /[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
            function(c:any) { 
            let cc = c.charCodeAt(0); 
            return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f); }
        );
        return strUtf;
    }

    decode(strUtf:string):string {
         // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
        let strUni = strUtf.toString().replace(
            /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
            function(c:any) {  // (note parentheses for precence)
            let cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f); 
            return String.fromCharCode(cc); }
        );
        strUni = strUni.toString().replace(
            /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
            function(c:any) {  // (note parentheses for precence)
            let cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
            return String.fromCharCode(cc); }
        );
        return strUni;
    }
} 
