//Design by Gora Asep S

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




const buttons=document.querySelectorAll(".button");
for(let button of buttons){
    button.addEventListener('click', function(event){
        const target=event.target;
        if(target.classList.contains('button2')){
            showDetails();
            return;
        }
        if(target.classList.contains('button1')){
            showProfile();
            return;
        }
    })
}

function showDetails(){
    let deleteFlexProfileContent = document.getElementById("flexProfileContent");
    deleteFlexProfileContent.parentNode.removeChild(deleteFlexProfileContent);

    let detail2=document.createElement("div");
    detail2.setAttribute("class", "profileContent");
    detail2.setAttribute("id", "newDetail")
    
    detail2.innerHTML='<h3>Informasi Lainnya</h3><table align="center" border="1"><tr><th>Tanggal lahir</th><td>19 Juli 1997</td></tr><tr><th>Lulusan</th><td>Universitas Telkom</td></tr><tr><th>Jurusan</th><td>S1 Teknik Elektro</td></tr><tr><th>Nomor Telepon</th><td>+62-822-1832-8615</td></tr></table>';

    let profileBody1=document.getElementById("flexProfile");
    profileBody1.appendChild(detail2);
}

function showProfile(){
    let deleteNewDetail = document.getElementById("newDetail");
    deleteNewDetail.parentNode.removeChild(deleteNewDetail);

    let detail1=document.createElement("div");
    detail1.setAttribute("class", "profileContent");
    detail1.setAttribute("id", "flexProfileContent")
    detail1.innerHTML='<p>Gora Asep Setiana</p><figure><img src="assets/image/1102150086.jpg"><figcaption>Lokasi: Alun-alun Kota Bandung</figcaption></figure>';
    let profileBody2=document.getElementById("flexProfile");
    profileBody2.appendChild(detail1);
    
}
