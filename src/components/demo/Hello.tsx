import React from 'react'
import { Button } from 'antd'

interface Greeting {
    name: string,
    // 加了类型约束，设置默认属性，为可选属性才不报错
    // firstName?: string,
    // lastName?: string,
    firstName: string,
    lastName: string
}

const Hello = (props: Greeting) => <Button>Hello, {props.name}</Button>

// // 类型约束的函数组件
// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
//     children
// }) => <Button>Hello, {name}</Button>

// 默认属性
Hello.defaultProps = {
    firstName: '',
    lastName: ''
}


export default Hello

/** 
 * 总结：
 * 类型约束函数组件没有带来明显好处，还可能官方去除
 * 
*/
