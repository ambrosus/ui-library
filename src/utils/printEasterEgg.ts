export function printEasterEgg() {
  const asciiArt = `%c
                   ,lc,..                                                       
                    'cx0K0xoc,..                                                
                       .;o0WMWX0xoc,..                                          
                          .cOWMMMMMWX0xolc,..                                   
                            .lXMMMMMMMMMMMWX0koc,..                             
                              :XMMMMMMMMMMMMMMMMWX0koc,..                       
                              .dWMMMMMMMMMMMMMMMMMMMMMWX0ko;                    
                               oWMMMMMMMMMMMMMMMMMMMMMMMWN0o.                   
                              'OMMMMMMMMMMMMMMMMMMWN0kdc;..                     
                             'kWMMMMMMMMMMMMWX0kdc;..                           
                           .lKMMMMMMMWX0Okoc;..                                 
                        .,dKWMMWX0koc;..                                        
                     .:d0XX0koc;..                                              
                    ;xxoc;..                                                    
                                                                                
                                                                                
                                                                                
    10001      1x1   1000000001    1x000000001.      10001       .100000001.    
   00  x00     1x1   10       001  1x1        1x1   00  x00     10        101   
  000xxxx000   1x1   1O0xxxx001    1x1        1x1  000xxxx000   101        01   
 000      000  1x1   10     1111   1x100000001x   000      000   '100000001'    

%cDeveloper?
Build with us: https://airdao.io/grants
`;

  console.log(
    asciiArt,
    'font-size: 1.5vw; font-weight: 700;',
    'font-size: 16px',
  );
}
