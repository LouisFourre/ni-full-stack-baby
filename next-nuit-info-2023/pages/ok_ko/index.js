
import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/sunburst.css'; // Importez le style de coloration syntaxique que vous souhaitez utiliser


// import styles ok_ko.css
import 'styles/ok_ko.css';


export default function OkKoPage () {
  const highlightedCode = hljs.highlight(
    '#include <stdio.h>\nint main() {\n  printf("Hello, world!\\n");\n  return 0;\n}\n\n#include <stdlib.h>\nint add(int a, int b) {\n  return a + b;\n}\n\n#include <string.h>\nvoid reverseString(char str[]) {\n  int length = strlen(str);\n  for (int i = 0, j = length - 1; i < j; i++, j--) {\n    char temp = str[i];\n    str[i] = str[j];\n    str[j] = temp;\n  }\n}\n\n#include <math.h>\ndouble squareRoot(double x) {\n  return sqrt(x);\n}\n\n#include <stdbool.h>\nbool isEven(int num) {\n  return num % 2 == 0;\n}\n\n#include <stdint.h>\nuint64_t factorial(int n) {\n  if (n == 0 || n == 1)\n    return 1;\n  return n * factorial(n - 1);\n}\n\n#include <ctype.h>\nint countUpperCase(char str[]) {\n  int count = 0;\n  for (int i = 0; str[i] != "\\0"; i++) {\n    if (isupper(str[i]))\n      count++;\n  }\n  return count;\n}\n\n#define PI 3.14159\nfloat calculateArea(float radius) {\n  return PI * radius * radius;\n}\n\nstruct Point {\n  int x;\n  int y;\n};\n\ntypedef struct {\n  double real;\n  double imag;\n} Complex;\n\nenum Color {\n  RED,\n  GREEN,\n  BLUE\n};\n\nint power(int base, int exponent) {\n  int result = 1;\n  for (int i = 0; i < exponent; i++) {\n    result *= base;\n  }\n  return result;\n}\n   ',
    { language: 'c' }
  ).value

  const handleButtonClick = () => {
    if (document.querySelector('.check_img2')) return;
    const check_img = document.querySelector('.check_img');
    check_img.classList.replace('check_img', 'check_img2');
    setTimeout(() => {
      check_img.classList.replace('check_img2', 'check_img');
    }, 1000);
  };

  const handleButtonClick2 = () => {
    if (document.querySelector('.boxe2')) return;

    const audio = new Audio('ko.mp3');
    const check_img = document.querySelector('.boxe');
    const ko_img = document.querySelector('.ko');
    check_img.classList.replace('boxe', 'boxe2');


    setTimeout(() => {
      ko_img.classList.replace('ko', 'ko2');
      audio.play();
    }, 2000);

    setTimeout(() => {
      check_img.classList.replace('boxe2', 'boxe');
      ko_img.classList.replace('ko2', 'ko');
    }, 6000);
  }

  return (
    // body
    
    <div className='ok_ko_container'>
      <img src="Light_green_check.png" class="check_img"/>
      <img src="boxe.png" class="boxe"/>
      <img src="ko.png" class="ko"/>
      <div className='code_specs'>
        <p className='langage'>Langage:</p>
        <p className='lang'>C</p>
        <p className='langage'>Auteur:</p>
        <p className='lang'>Mr. Propre</p>
        <p className='langage'>Date:</p>
        <p className='lang'>07/12/2023</p>
      </div>
      <div className="theme-atom-one-dark shadow-3xl text-sm relative max-w-full tab-size h-full overflow-auto">
        <pre className="pre-wrapper">
          <code className='c' dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
      <div className='button_container'>
        <div className='button_ok' onClick={handleButtonClick}>
        <p>✅</p>
        </div>
        <div className='button_ok' onClick={handleButtonClick2}>
        <p>❌</p>
        </div>
        
      </div>
    </div>
    

  );
};
