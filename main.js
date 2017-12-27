const {app,BrowserWindow}=require('electron');
const url=require('url');
const path=require('path');

let win;
function CreatWindow() {
    win=new BrowserWindow({
        width:800,
        height:600
    });
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }));
    win.on('closed',()=>{
        win=null
    })

}
app.on('ready',CreatWindow);

app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

app.addRecentDocument('/Users/Desktop/work.type')
// app.clearRecentDocuments()
