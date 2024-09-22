/*
Ejercicio 3
En estos ejercicios no tienes acceso al enunciado. Debes deducir qué hacer observando los
datos de entrada y el resultado:
3.1 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/



const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]
    
    // create your function here
    
    const splitBars = (list) => {
    const cloneList = [...list]
    const mp4 = cloneList.pop()
    return cloneList.join("/") + '.' + mp4
    }
    
    console.log(splitBars(input1))   // 'Downloads/Videos/capture.mp4'


    const input2 = [
    'CodinGame',
    'python',
    'py',
    ];
    console.log(splitBars(input2))        // 'CodinGame/python.py'



    const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]
    console.log(splitBars(input3))   // 'programming/languages/easy/beginner/useful/pythonstuff.py'