// src: http://fiddle.jshell.net/Panman8201/MKZrm/10/light/
if (($(window).height() + 100) < $(document).height()) {
    $('#top-link-block').removeClass('hidden').affix({
        offset: {top:100}
    });
}
