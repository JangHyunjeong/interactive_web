(function(){
    let winScrollTop = document.querySelector('html').scrollTop;
    ///console.log('111',winScrollTop);


    document.addEventListener('scroll',function(){
        winScrollTop = document.querySelector('html').scrollTop;
        const mainBannerRail = document.querySelector('.mainBannerRail');
        let maintBannerRectTop =  mainBannerRail.getBoundingClientRect().top;
        let mainBannerOffsetTop = mainBannerRail.offsetTop;
        let mainBannerHeight = mainBannerRail.offsetHeight
        let mainBannerRailBottom = mainBannerOffsetTop + mainBannerHeight;
        let mainBannerPer = maintBannerRectTop/mainBannerHeight *-100;
        //console.log('22',winScrollTop);

        if(winScrollTop > 0) {
            //01. 메인배너 영역 인터렉션 넣기
            document.querySelector('.jsMainLogo').classList.add('off');
            document.querySelector('.jsMainPagination').classList.add('off');
            document.querySelector('.jsMainTit').classList.add('on');
            document.querySelector('.jsMainPoint').classList.add('on');
            

        } else {
            //01. 메인배너 영역 인터렉션 넣기
            document.querySelector('.jsMainLogo').classList.remove('off');
            document.querySelector('.jsMainPagination').classList.remove('off');
            document.querySelector('.jsMainTit').classList.remove('on');
            document.querySelector('.jsMainPoint').classList.remove('on');
        }


        // we do ~~~ 슬로건 영역
        console.log(mainBannerPer);
        if(mainBannerPer >= 30 && mainBannerPer < 50) {
            if(document.querySelector('.s1')){
                document.querySelector('.jsMainPoint').classList.remove('s2');
            }
            if(document.querySelector('.s3')){
                document.querySelector('.jsMainPoint').classList.remove('s3');
            }
            document.querySelector('.jsMainPoint').classList.add('s1');
        }
        if(mainBannerPer >= 50 && mainBannerPer < 70) {
            if(document.querySelector('.s1')){
                document.querySelector('.jsMainPoint').classList.remove('s1');
            }
            if(document.querySelector('.s3')){
                document.querySelector('.jsMainPoint').classList.remove('s3');
            }
            document.querySelector('.jsMainPoint').classList.add('s2');
        }
        if(mainBannerPer >= 70) {
            if(document.querySelector('.s1')){
                document.querySelector('.jsMainPoint').classList.remove('s1');
            }
            if(document.querySelector('.s3')){
                document.querySelector('.jsMainPoint').classList.remove('s2');
            }
            document.querySelector('.jsMainPoint').classList.add('s3');
        }
        




        // 01. 메인배너 인터렉션 end
        

        if(winScrollTop > mainBannerRailBottom) {
            document.querySelector('.jsMainBanner').classList.add('off');
            document.querySelector('.jsMainCompany').classList.add('on');

        } else {
            document.querySelector('.jsMainBanner').classList.remove('off');
            document.querySelector('.jsMainCompany').classList.remove('on');
        }
    })
})();
