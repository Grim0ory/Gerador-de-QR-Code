const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");



function gerarQrCode(){
   const valorInput = qrCodeInput.value;

   if(!valorInput){
        return;
   }

   qrCodeBtn.innerText = "Gerando código...";

   qrCodeImg.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInput.value}`;

   qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("ativo");
        qrCodeBtn.innerText = "Gerar QR Code";

   })

   
   
   console.log(valorInput);
}

qrCodeBtn.addEventListener("click", ()=>{
    gerarQrCode();
});


qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        gerarQrCode();
    }
});

qrCodeInput.addEventListener("keyup", ()=>{
    if(!qrCodeInput.value){
        container.classList.remove("ativo");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})