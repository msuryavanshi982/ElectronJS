const {app, BrowserWindow, Menu} = require('electron');
console.warn("main process")
function createWindow(){
    const win= new BrowserWindow({
        width:800,
        height:600,
       // alwaysOnTop:true,
        title:"awesome assignment",
        //resizable:true,
        //frame:false,
       // backgroundColor:"#fff000",
        webPreferences:{
            nodeIntegration:true
        }
    })
    let child=new BrowserWindow({parent:win})
    child.loadFile("index.html")
    child.show()
    win.loadFile("index.html")
    win.webContents.openDevTools()   // to open dev tools
}

//app.whenReady().then(createWindow);
app.on('before-quit',()=>{
    console.warn("call beforn quit app")
   // e.preventDefault();
})


app.on('ready', ()=>{
    createWindow();
    console.log(app.isReady())
    console.warn("app is ready")
})