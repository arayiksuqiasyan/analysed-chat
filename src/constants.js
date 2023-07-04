import {v4 as uuid} from "uuid";

export const MENU_OPTIONS = [
    {id:1,name:'Instruction',iconName:'Instruction',path:'/instruction'},
    {id:2,name:'My info',iconName:'info',path:'/info'},
    {id:3,name:'Chat',iconName:'chat',path:'/chat'},
    {id:4,name:'My career paths',iconName:'career',path:'/career'},
    {id:5,name:'Feedback',iconName:'feedback',path:'/feedback'},
]

export const scrollToBottom = (ref) => {
    if (ref?.current) {
        ref.current.scrollTo({
            top: ref.current.scrollHeight,
            behavior: 'smooth'
        })
    }

}

export const generateAiMessage = (value) => {
    let answer = {id: uuid(), role: 'bot', content: 'Hello from ChatGpt!'}
    const hello = /\bhello\b/.test(value.toLowerCase())
    const howAreYou = /\bhow are you\b/.test(value.toLowerCase())
    if (hello) {
        answer.content = "Hello! How can I assist you today?"
    } else if (howAreYou) {
        answer.content = "As an AI, I don't have feelings, but I'm here to help you! How can I assist you today?"
    }
    return answer
}

