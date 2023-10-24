$(function(){
    let imageList = ["imgs/card1.jpg","imgs/card2.jpg","imgs/card3.jpg"];

    var iterator = 0;
    var isFront = true;
    $("#card1, #card2, #card3").css("display","none");
    $("#rotateBox").css("display","none");
    $("#leftHalf").css("display","none");
    $("#rightHalf").css("display","none");
    $("#img1, #img2, #img3").click(function(e){
        iterator = Number(String(e.target.id).replace("img","") - 1);
        setUpPic();
    });



    $("#bigImg").focusin(function(){
        $("#background-fade").css("pointer-events","none");
    });
    $("#bigImg").focusout(function(){
        $("#background-fade").css("pointer-events","all");
    });
    
    $("#background-fade").click(function(){
        isFront = true;
        
        $(this).animate({
            opacity: "0"
        },1000);
        
        
        $("#bigImg").animate({
            opacity: "0"
        },1000,function(){
            $("#image-container").css({"z-index": "auto"});
            $(this).css({"display":"none",
                "z-index":"auto"});

                $("#mainImg").css("display","none");
                $("#card1, #card2, #card3").css("display","none");
        });
    });
    $("#rotateBox").click(function(){
        
            $("#rotateBox").css("display","none");
            $("#leftHalf").css("display","none");
            $("#rightHalf").css("display","none");
            $("#mainImg").css("display","none");
            

            if(isFront){
                $("#mainImg").attr("src", imageList[iterator]);

                
                    $("#bigImg").animate({
                        width: `440px`,
                        height: `280px`,
                        marginLeft: `-222px`,
                        marginTop: `-165px`
                    },1500,function(){
                        isFront = false;
                        
                        $(`#card${iterator + 1}`).css("display","block");
                        $("#rotateBox").css("display","block");
                        $("#leftHalf").css("display","block");
                        $("#rightHalf").css("display","block");
                    });
                
                
                
            }
            else{
                $(`#card${iterator + 1}`).css("display","none");
                $("#bigImg").animate({

                    width: `330px`,
                    height: `490px`,
                    marginLeft: `-160px`,
                    marginTop: `-270px`
                },1500,function(){
                    isFront = true;
                    $("#mainImg").css("display","block");
                    
                    $("#rotateBox").css("display","block");
                    $("#leftHalf").css("display","block");
                    $("#rightHalf").css("display","block");

                });
            }
                
            
            
        
        
    });
    $("#leftHalf").click(function(){
        if(iterator !== 0 ){
            $(`#card${iterator + 1}`).css("display","none");
            isFront = true;
            iterator--;

            $("#leftHalf").css("display","none");
            $("#rightHalf").css("display","none");
            $("#mainImg").css("display","none");
            $("#mainImg").attr("src", imageList[iterator]);

            $("#bigImg").animate({

                width: `330px`,
                height: `490px`,
                marginLeft: `-160px`,
                marginTop: `-270px`
            },1500,function(){
                $("#mainImg").css("display","block");

                $("#leftHalf").css("display","block");
                $("#rightHalf").css("display","block");

            });
        }
        
    });
    $("#rightHalf").click(function(){
        if(iterator !== (imageList.length - 1)){
            $(`#card${iterator + 1}`).css("display","none");
            isFront = true;
            iterator++;

            $("#leftHalf").css("display","none");
            $("#rightHalf").css("display","none");
            $("#mainImg").css("display","none");
            $("#mainImg").attr("src", imageList[iterator]);

            $("#bigImg").animate({
                width: `330px`,
                height: `490px`,
                marginLeft: `-160px`,
                marginTop: `-270px`
            },1500,function(){

                $("#mainImg").css("display","block");

                $("#leftHalf").css("display","block");
                $("#rightHalf").css("display","block");
            });
        }
    });

    $("#rotateBox").hover(function(){
        
            
        $("#rotate").css("display","block");
        
        
    },function(){
        $("#rotate").css("display","none");
    });
    $("#leftHalf").hover(function(){
        if(iterator !== 0){
            
            $("#left").css("display","block");
        }
        
    },function(){
        $("#left").css("display","none");
    });
    $("#rightHalf").hover(function(){
        if(iterator !== (imageList.length - 1)){
            
            $("#right").css("display","block");
        }
        
    },function(){
        $("#right").css("display","none");
    });
        
    function setUpPic(){
        $("#leftHalf").css("display","none");
        $("#rightHalf").css("display","none");
        $("#image-container").css({"z-index": "-1"});
        $("#background-fade").animate({
            opacity: ".7"
        },1500);
        $("#bigImg").css({"display":"flex",
                          "z-index":"2"});
        $("#mainImg").css("display","none");
        $("#mainImg").attr("src", imageList[iterator]);


        $("#bigImg").animate({
            width: `330px`,
            height: `490px`,
            marginLeft: `-160px`,
            marginTop: `-270px`,
            opacity: "1"
        },1000,function(){

            $("#mainImg").css("display","block");

            $("#rotateBox").css("display","block");
            $("#leftHalf").css("display","block");
            $("#rightHalf").css("display","block");


        });
    }

    
});

