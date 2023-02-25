export type CodePanelType = {
    str_items: string,
    answers: string
}

export type TutorialType = {
    summaryDescription: string,
    tutorialDescription: string,
    codePanel: CodePanelType,
    baseImage: string,
    resultImage: string
}