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
]
