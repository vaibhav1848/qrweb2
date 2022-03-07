qrData = document.getElementById('dataInput');
qrLastname = document.getElementById('lastname');
qrdob = document.getElementById('dob');
qrnat = document.getElementById('nat');
qrmed = document.getElementById('med');
qrbg = document.getElementById('bg');
qrcont = document.getElementById('cont');
qrblank = document.getElementById('blank');
qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#203354",
    type: "square"
  },
});

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrlastname = () => {
  newQrData = qrData.value+qrLastname.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrdob = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrbg = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrbg.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrnat = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrbg.value+qrnat.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrmed = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrbg.value+qrnat.value+qrmed.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrcont = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrbg.value+qrnat.value+qrmed.value+qrcont.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrupldimg = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrbg.value+qrnat.value+qrupldimg;
  qrCode.update({
    data: newQrData
  });
};
const updateQrblank = () => {
  newQrData = "first name:"+qrData.value+"   "+"last name:"+qrLastname.value+"   "+"date of birth:"+qrdob.value+"   "+"Blood Group:"+qrbg.value+"   "+"City:"+qrnat.value+"   "+"Previous Medications:"+qrmed.value+"   "+"Emergency Contact:"+qrcont.value+"Comments:"+qrblank.value+"   "+"Image"+qrupldimg.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));