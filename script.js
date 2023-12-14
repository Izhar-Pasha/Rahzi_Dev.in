                    // SIDE NAVIGATIONI

                    const openbtn = document.querySelector(".open-btn");
                    const closebtn = document.querySelector(".close-btn");
                    const wrap = document.querySelectorAll(".wrap");
                    const togglebtn = document.querySelectorAll("#toggle-btn");
                    
                    openbtn.addEventListener("click", () => {
                        for (let x = 0; x < wrap.length; x++){
                            wrap[x].classList.add('visible');
                        }
                        
                    })
                    
                    closebtn.addEventListener("click", () => {
                        for (let x = 0; x < wrap.length; x++){
                            wrap[x].classList.remove('visible');
                        }
                        
                    })
                    
                    
                    
                    function homepge() {
                        var element = document.querySelector("#profile-pic");
                        element.classList.add("profilepic");
                    
                    
                        var element1 = document.querySelector("#my-info");
                        element1.classList.add("profileinfo");
                    }
                    
                    homepge() ;
                    
                    
                    function aboutimg() {
                        var element2 = document.querySelector("#about-container");
                        element2.classList.add("aboutimg");
                    }
                    
                    function toggle(){
                        var toggbtn = document.body;
                        toggbtn.classList.toggle("darkmode");
                    }
                    
                    
                    function mylog() {
                        var element3 = document.querySelector("");
                        element3.classList.add("mylogo");
                    
                        // var element3 = document.querySelector("#log-css");
                        // element3.classList.add("mylogo");
                    }
                    
                    
                    // CLEAR FORM
                    const myform = document.querySelector("#myform");
                    const mybtn = document.querySelector("#myreset");
                    const myname = document.querySelector("#name");
                    const email = document.querySelector("#email");
                    const textarea = document.querySelector("#textarea");
                    
                    mybtn.addEventListener("click", ()=>{
                        return(myname.value="",email.value="",textarea.value="");
                        // return(email.value="");
                        // return(textarea.value="");
                    })
