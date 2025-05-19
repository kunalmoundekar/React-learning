
// const h2 = React.createElement("h2",
//     { id: "heading" },
//     "hello world from- react")
// const ren = ReactDOM.createRoot(document.getElementById("root"))
// ren.render(h2)

// console.log(h2)





const parant = React.createElement( "div",{ id: "parant" },["hii",
    React.createElement("div",{id:"1child"}),
    React.createElement("div", { id: "childElement" },
    React.createElement("h1",{},"i am h1 tag"))
])
const parantRender = ReactDOM.createRoot(document.getElementById("root"))
parantRender.render(parant)





// {/* <div id="parant">
// <div id="child">
//     <h1></h1>
// </div>
// </div> */}
