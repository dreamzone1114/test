//宣告全域變數
var text1;//輸入方塊物件
var btn1;//按鈕物件
//網頁載入完成後事件處理
window.onload = function(){
    //取得輸入方塊物件
    text1 = document.getElementById("text1");
    //取得鈕物件
    btn1 = document.getElementById("btn1");
    //按鈕物件註冊點選事件
    btn1.addEventListener("click", function(){
        //檢查輸入方塊是否為123
        if(text1.value === "123"){
            alert('輸入正確');
        }else{
            alert('輸入不正確，請重新輸入');
        }
    })
    var getStr = function (){
        return "test";
    }
}