import { TutorialType } from "./types"

export const allTutorials: TutorialType[] = [
    {tutorialTitle: 'Variables',
    baseImage: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg',
    resultImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
    codePanel: {str_items: '<div id="l1">ac_on=False #Initialize AC settings</div>\n<div id="l2">outside_temp=get_initial_temp() #Gets temperature at 12:00AM</div>\n<div id="l3">for time in range(0,24*60,<input id="q1" placeholder="Integer"></input>):</div>\n<div id="l4">\tif <input id="q2" placeholder="Variable name"></input>>90:</div>\n<div id="l5">\t\tac_on=True</div>\n<div id="l6">\telse:</div>\n<div id="l7">\t\tac_on=False</div>',
                answers: '60\noutside_temp'},
    summaryDescription: 'This is a summary',
    tutorialDescription: `This lesson will explore the concept of variables in Python. To assign variables, we use the syntax:
 \`\`\`variable_name=value\`\`\`
For our first task, we will be turning the light bulb in our home on through the power of magic, I mean, code. We represent the state of the bulb with True to represent on and False to represent off.
The values True and False here are also called *boolean* values, and we will see them appear again in the next lesson when we code up conditionals. For now, `},

{}

,
{tutorialTitle: 'For Loops and Lists',
    baseImage: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg',
    resultImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
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
