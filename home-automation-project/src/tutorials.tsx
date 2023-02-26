import { TutorialType } from "./types"
import allLightsOn from './assets/allLightsOn.png'
import allLightsOff from './assets/allLightsOff.png'
import oneLightOn from './assets/oneLightOn.png'
import alternateLights from './assets/alternateLights.gif'
import specificTimeLightOn from './assets/specificTimeLightOn.png'

export const allTutorials: TutorialType[] = [
    {tutorialTitle: 'Variables',
    baseImage: allLightsOff,
    resultImage: oneLightOn,
    codePanel: {str_items: '<div id="l1">light1=get_light() # obtain the light bulb</div>\n<div id="l2">light1=<input id="q1" placeholder="Boolean"></input> # switch the lightbulb on</div>',
                answers: 'True'},
    summaryDescription: 'Welcome to the first tutorial in learning and applying Python programming to home automation! Over the course of these five tutorials, you will not only master the fundamentals coding, but also learn how to turn your home smart. In our first lesson, we will explore how we may switch a single light bulb in our home on using the power of code. We will learn about variables and their various types and leave you to simulate the light bulb and watch the light fill the living room using Python code.',
    tutorialDescription: `When coding any program, we need to define what kinds of objects, whether they be numbers, strings (sequences of characters), or in our case, home appliances, we are working with. We do this using variables. To assign a variable, we use the syntax:

\`\`\`variable_name=value\`\`\`

The values True and False here are also called **boolean** values, which is a fancy way of saying they represent the 'truthiness' of something, in our case, the state of the light bulb. Here is another examples of assigning and using variables in conjunction with one another:

\`\`\`hello = "Hello "
world = "World!"
message = hello + world
print(message)
\`\`\`

We use the built-in function (more on that later!) print to print out a string. In the editing space to the right, we want to switch the light bulb on. Remember, a variable must always be defined before it can be modified!`},

{tutorialTitle: 'Conditional statements',
    baseImage: alternateLights,
    resultImage: specificTimeLightOn,
    codePanel: {str_items: '<div id="l1">bulb=False #Initialize bulb variable to off</div>\n<div id="l2">cur_time=17 #Set time to 5:00PM</div>\n<div id="l3">if cur_time>=<input id="q1" placeholder="Integer"></input>:</div>\n<div id="l4">\t bulb= <input id="q2" placeholder="Boolean"</input></div>',
                answers: '17\nTrue'},
    summaryDescription: 'You will learn about how to use conditional statements in real life applications.',
    tutorialDescription: `Conditional statements, also known as control structures, are used in programming to enable the computer to make decisions based on certain conditions. Conditional statements allow programmers to control the flow of execution of their code based on the values of variables or other data.
\`\`\`
if statement:
  condition to be executed 
\`\`\`
The purpose of this code is to simulate the behavior of light bulb. The cur_time variable represents the current time of day. The if statement tells the bulb to turn on if the current time is 5pm or later. The animation above shows the time switching between 10 am and 5 pm; at both times, we see that the room is dark. Once you have filled in the blanks and rearranged the code statements, you will find that the light bulb turns on in the evening!
 `
},
{tutorialTitle: 'For Loops and Lists',
    baseImage: allLightsOff,
    resultImage: allLightsOn,
    codePanel: {str_items: '<div id="l1">time=8 #8AM</div>\n<div id="l2">lights=[False,False,False,False]</div>\n<div id="l3">for index in <input id="q1" placeholder=""></input>(0,len(<input id="q2" placeholder=""></input>)):</div>\n<div id="l4">\tif time>7:</div>\n<div id="l5">\t\tlights[<input id="q3" placeholder=""></input>]=True</div>\n<div id="l6">\telse:</div>\n<div id="l7">\t\tlights[index]=<input id="q4" placeholder=""></input></div>',
                answers: 'range\nlights\nindex\nFalse'},
    summaryDescription: 'Learn how loops and lists can be used in smart homes.',
    tutorialDescription: `This lesson will explore the concept of loops and lists in Python. To print "Hi" 20 times, we use the syntax:
 \`\`\`
 for i in range(0,20):
    print("Hi")
 \`\`\`
 Here is a way we can multiply 5 and 10 without using the multiplication (*) operator:
 \`\`\`
 ans = 0
 for i in range(0,10):
    ans=ans+5
 \`\`\`
 This works because 5*10 is 10 additions of the number 5 to 0.

 A list is a variable that stores multiple variables in a specific order. An example of a real life list is a grocery list, which is a physical item that stores other items in order.
 The following is a grocery list as a Python list:
 \`\`\`
 grocery_list=['milk','bread','eggs','apples','lettuce']
 \`\`\`
 We can read and change list items by accessing the list at a given index. Let's see what the first item we need to buy with the following syntax:
 \`\`\`
 grocery_list=['milk','bread','eggs','apples','lettuce']
 print(grocery_list[0]) #Prints 'milk'
 \`\`\`
 Notice we get the 0th item rather than indexing with 1. While people start counting from 1, computers start from 0. To print the second, third, and fourth elements, we use:
 \`\`\`
 grocery_list=['milk','bread','eggs','apples','lettuce']
 print(grocery_list[1]) #Prints 'bread'
 print(grocery_list[2]) #Prints 'eggs'
 print(grocery_list[3]) #Prints 'apples'
 \`\`\`
 While we can write individual lines of code to print the entire grocery list, we can use for loops to simplify things:
 \`\`\`
 grocery_list=['milk','bread','eggs','apples','lettuce']
 for index in range(0,len(grocery_list)):
    print(grocery_list[index])
    #The above prints "milk","bread","eggs","apples", and "lettuce"
 \`\`\`
 Rather than having a set upper bound, we grab the length of the grocery list using len. We can change this list as well by using the following syntax:
 \`\`\`
 grocery_list=['milk','bread','eggs','apples','lettuce']
 grocery_list[3]='sugar'#Changes list into ['milk','bread','eggs','sugar','lettuce']
 \`\`\`

Your task is to turn on all of the light bulbs in our home if the time is greater than 7AM, but leave them off otherwise. The on status of each light bulb is stored in an list. Change the list elements such that all of the light bulbs have the on status as true.`}
]
