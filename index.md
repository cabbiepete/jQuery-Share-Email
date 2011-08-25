---
layout: site
location: front
title: Demo site for jQuery-Share-Email plugin
meta_keywords: jquery, social, share via email
meta_description: A simple jquery plugin to make a nice share via email link on your site based on the pages contents.
---

jQuery Share Email plugin demo site
===================================

This page demonstrates the email share plugin

Dependancies
------------
* [jQuery](http://jquery.com/ "jQuery home pageTitle")
* [jQuery tmpl plugin](http://api.jquery.com/jquery.tmpl/ "Tmpl API Page")

Code
----
The code below is all that is required.

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.6.2.min.js"></script>
    <script type="text/javascript" src="/jQuery-Share-Email/js/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="/jQuery-Share-Email/js/jquery.shareemail.js"></script>
    <script type="text/javascript">
      (function($) {
        $(".st_email").shareEmail();
      })(jQuery);
    </script>
    <span class="st_email"></span>

Let's quickly go through this. Firstly we include the jQuery library, then we include the jQuery Tmpl plugin, 
, next we include the shareemail pluging, finally we call the shareemail plugin using the selector of all elements with class 'st_email', this then applies to the span element at the end of the code.

Once the plugin has been applied the span element now looks like this.

    <span class="st_email">
      <span class="button" style="text-decoration:none;display:inline-block;cursor:pointer;">
        <span class="chicklets email">Email</span>
      </span>
    </span>

Demo
----
Below is a share email link using the code above.

<div>
  <span class="st_email"></span>
  <script type="text/javascript">
    (function($) {
      $(".st_email").shareEmail();
    })(jQuery);
  </script>
 </div>

