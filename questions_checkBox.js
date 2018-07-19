

    function show_data(a){
        var que_body=$("#que_body");
        var que_body1=$("#que_body1");
        var count=0;
        for(i in a){
            var h=a[i];
            var ul_=$("<ul style=\"border-bottom:1px dashed #ccc;height: 70px;\"></ul>");
            //标题
            var li_title=$("<li></li>");
            var li_title_a=$("<a></a>").text(h.title);
            li_title.append(li_title_a);
            //日期
            var li_date=$("<li></li>");
            var li_date_span=$("<span></span>").text(h.date);
            li_date.append(li_date_span);
            //浏览
            var li_browse=$("<li></li>");
            var li_browse_span1=$("<span></span>").text("浏览：");
            var li_browse_span2=$("<span></span>").text(h.view);
            li_browse.append(li_browse_span1,li_browse_span2);
            //回答
            var li_answer=$("<li></li>");
            var li_answer_span1=$("<span></span>").text("回答：");
            var li_answer_span2=$("<span></span>").text(h.answer);
            li_answer.append(li_answer_span1,li_answer_span2);
            //收藏
            var li_collect=$("<li></li>");
            var li_collect_span1=$("<span></span>").text("收藏：");
            var li_collect_span2=$("<span></span>").text(h.collect);
            li_collect.append(li_collect_span1,li_collect_span2);
            //分类
            var li_classify=$("<li></li>");
            var li_classify_span1=$("<span></span>").text("分类：");
            var li_classify_span2=$("<span></span>").text(h.class);
            li_classify.append(li_classify_span1,li_classify_span2);
            //点击收藏
            var li_click_collect=$("<li style=\"width:73px;float:right;cursor:pointer;\"></li>");
            var li_click_collect_span=$("<span></span>").text("点击收藏");
            li_click_collect.append(li_click_collect_span);
            ul_.append(li_title,li_date,li_browse,li_answer,li_collect,li_classify,li_click_collect);
            que_body.append(ul_);


        }
    }
    function  f1() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check1.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f2() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check2.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f3() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check3.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f4() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check4.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f5() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check5.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f6() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check6.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f7() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check7.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f8() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check8.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f9() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check9.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f10() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check10.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f11() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check11.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f12() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check12.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f13() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check13.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f14() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check14.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f15() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check15.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f16() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check16.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f17() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check17.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f18() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check18.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f19() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check19.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f20() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check20.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f21() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check21.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f22() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check22.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }
    function  f23() {
        var que_body=$("#que_body");
        que_body.empty();
        $.get("phpDoc/check23.php",function (data) {
            var a=JSON.parse(data);
            show_data(a);
        });
    }




