/**
 * A small jquery plugin to make a simple mailto link based on the current page for sharing via email.
 */
(function($) {

  // replace 'pluginName' with the name of your plugin
  $.fn.shareEmail = function(options) {

    // extends defaults with options provided
    var o = $.fn.shareEmail.defaults;
    if (options) {
      o = $.extend(o, options);
    }

    // iterate over matched elements
    return this.each(function() {

      $.tmpl(o.template, o).appendTo($(this));

      $(this).click(function() {
        var data = {
          title: document.title,
          description: $('meta[name=description]').attr('content'),
          url: window.location.href,
          nl: "\n" // tmpl seems to each newline chars so we use this instead.
        }
        var url = 'mailto:?Subject=';
        var subject = $.tmpl(o.subjectTemplate, data).text();
        url += encodeURIComponent(subject);
        url += '&Body=';
        var eBody = $.tmpl(o.bodyTemplate, data).text();
        url += encodeURIComponent(eBody);
        window.location.href = url;
      });

    });

  };

  // plugin default options
  $.fn.shareEmail.defaults = {
    displayText: 'Email',
    title: 'Share this via email',
    template: '<span style="text-decoration:none;display:inline-block;cursor:pointer;" class="button"><span class="chicklets email">${displayText}</span></span>',
    subjectTemplate: "${title} - has been shared with you",
    bodyTemplate: "${nl}${nl}${title}${nl}${nl}Source: ${url}${nl}${nl}${description}"
  };


  // public functions definition
  /*$.fn.pluginName.functionName = function(foo) {
    return this;
  };

  // private functions definition
  function foobar() {}
  */
})(jQuery);
