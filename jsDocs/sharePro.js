function  show_ques(a) {
    var s_body=$("#exSharingContainer");
    var s_body1=$("#exSharingContainer1");
    for(i in a){
        var h=a[i];
        var div_share=$("<div class=\"exSharingContent\"></div>");
        var ul_share=$("<ul class=\"ex_main_left_content_ul uls clearfix\"></ul>");
        //顶部
        var li_top=$("<li class=\"center_top\"></li>");
        var li_top_ul=$("<ul></ul>");
        //标题
        var li_title=$("<li style=\"padding-left: 20px\"></li>");
        var li_title_a=$("<a></a>").text(h.title);
        li_title.append(li_title_a);
        //日期
        var li_date=$("<li style=\"float: right;\"></li>").text(h.date);
        li_top_ul.append(li_title,li_date);
        li_top.append(li_top_ul);
        //底部
        var li_bottom=$("<li class=\"center_bottom\"></li>");
        var li_bottom_ul=$("<ul style=\"background: none\"></ul>");
        //浏览
        var li_browse=$("<li></li>");
        var span_browse=$("<span></span>").text("浏览:");
        var span_browse_count=$("<span></span>").text(h.view);
        li_browse.append(span_browse,span_browse_count);
        //收藏
        var li_collect=$("<li></li>");
        var span_collect=$("<span></span>").text("收藏:");
        var span_collect_count=$("<span></span>").text(h.collect);
        li_collect.append(span_collect,span_collect_count);
        //点击收藏
        var li_click_collect=$("<li></li>");
        var span_click_collect=$("<span></span>").text("点击收藏");
        li_click_collect.append(span_click_collect);
        li_bottom_ul.append(li_browse,li_collect,li_click_collect);
        li_bottom.append(li_bottom_ul);

        ul_share.append(li_top,li_bottom);
        div_share.append(ul_share);
        s_body.append(div_share);

    }


}
