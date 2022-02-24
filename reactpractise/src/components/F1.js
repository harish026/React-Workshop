import React from "react"
export default function F1(){
  return React.createElement("div",{},[
    React.createElement("h1",{},"this is the header for this session..."),
    React.createElement("h2",{},"this is other header"),
    React.createElement("p",{},"this is the sample paragraph"),
    React.createElement("div",{},[
      React.createElement("section",{},[
        React.createElement("h1",{},"this is react component"),
        React.createElement("div",{},[
          React.createElement("h1",{},"this is other component"),
        ])
      ]),
      React.createElement("article",{},[
        React.createElement("h1",{},"this is react component"),
        React.createElement("div",{},[
          React.createElement("h1",{},"this is other component"),
        ])
      ])
    ])

  ])
}