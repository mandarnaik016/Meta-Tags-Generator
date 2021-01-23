$(document).ready(function() {
  $("#submitForm").on("click", function(event) {
    event.preventDefault();

    var title = $("#title").val();
    var description = $("#description").val();
    var keywords = $("#keywords").val();
    var lang = $("#lang").val();
    var author = $("#author").val();
    var url = $("#url").val();
    var image = $("#image").val();
    var type = $("input[name='contentType']:checked").val();
    var favicon = $("#favicon").val();

    var part1 = '<!-- META TAGS -->\n';
    var part2 = '<meta charset="utf-8" />\n';
    var part3 = '<meta content="width" name="MobileOptimized" />\n';
    var part4 = '<meta content="true" name="HandheldFriendly" />\n';
    var part5 = '<meta content="yes" name="apple-mobile-web-app-capable" />\n';
    var part6 = '<meta content="width=device-width, initial-scale=1" name="viewport" />\n';
    var part7 = '<meta content="IE=edge; IE=9; IE=8; IE=7; chrome=1" http-equiv="X-UA-Compatible" />\n';
    var part8 = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n\n';
    var partMeta = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8;

    var part10 = '<!-- SEO TAGS -->\n';
    var part11 = '<title>' + title + '</title>\n';
    var part12 = '<meta name="title" content="' + title + '" />\n';
    var part13 = '<meta name="description" content="' + description + '" />\n';
    var part14 = '<meta name="keywords" content="' + keywords + '" />\n';
    var part15 = '<meta name="robots" content="index, follow" />\n';
    var part16 = '<meta name="language" content="' + lang + '" />\n';
    var part17 = '<meta name="author" content="' + author + '" />\n\n';
    var partSeo = part10 + part11 + part12 + part13 + part14 + part15 + part16 + part17;


    var part19 = '<!-- OPEN GRAPH -->\n';
    var part20 = '<meta property="og:title" content="' + title + '" />\n';
    var part21 = '<meta property="og:description" content="' + description + '" />\n';
    var part22 = '<meta property="og:url" content="' + url + '" />\n';
    var part23 = '<meta property="og:image" content="' + image + '" />\n';
    var part24 = '<meta property="og:type" content="' + type + '" />\n\n';
    var partOpen = part19 + part20 + part21 + part22 + part23 + part24;

    var part26 = '<!-- TWITTER -->\n';
    var part27 = '<meta content="summary_large_image" name="twitter:card" />\n';
    var part28 = '<meta content="' + title + '" name="twitter:title" />\n';
    var part29 = '<meta content="' + title + '" name="twitter:image:alt" />\n';
    var part30 = '<meta content="' + image + '" name="twitter:image" />\n';
    var part31 = '<meta content="' + description + '" name="twitter:description" />';
    var partTwitter = part26 + part27 + part28 + part29 + part30 + part31;

    var final = partMeta + partSeo + partOpen + partTwitter;
    $("#display").html(final);
    
  });

  $("#textCopy").click(function() {
    $("#display").select();
    document.execCommand("copy");
    $(this).tooltip('show');
  });

});