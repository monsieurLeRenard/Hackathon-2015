if (typeof jQuery != 'undefined') {
    // jQuery is loaded => print the version
    // console.log(jQuery.fn.jquery, jQuery.isEmptyObject(pbx));
}
/*
if (window.location.href.indexOf('debug_comp_paths=') != -1 && (window.location.href.indexOf('toolbar=') != -1 || window.location.href.indexOf('marketbar=') != -1)) {

    var pbx = unsafeWindow.pbx;

    // console.log(pbx);

    var toolbar = {};
    toolbar.version = '1.5',
        countries = {
            '***': '',
            'AU': 'http://photobox.com.au/',
            'AT': 'http://www.photobox.at/',
            'BEFR': 'http://fr.photobox.be/',
            'BENL': 'http://nl.photobox.be/',
            'CA': 'http://www.photobox.ca/',
            'CHDE': 'http://de.photobox.ch/',
            'CHFR': 'http://fr.photobox.ch/',
            'DE': 'http://www.photobox.de/',
            'DK': 'http://www.photobox.dk/',
            'ES': 'http://www.photobox.es/',
            'FI': 'http://www.photobox.fi/',
            'FR': 'http://www.photobox.fr/',
            'IE': 'http://www.photobox.ie/',
            'IT': 'http://www.photobox.it/',
            'NL': 'http://www.photobox.nl/',
            'NZ': 'http://photobox.co.nz/',
            'NO': 'http://no.photobox.com/',
            'PL': 'http://www.photobox.pl/',
            'PT': 'http://www.photobox.pt/',
            'SE': 'http://www.photobox.se/',
            'UK': 'http://photobox.co.uk/',
            '***': '',
            'APO': 'http://foto.apollo.se',
            'AUC': 'http://auchandirect.photobox.fr/',
            'BP': 'http://www.bellapix.com/',
            'CD': 'http://www.cdiscountphoto.com/',
            'CF': 'http://photo.carrefour.fr/',
            'FS': 'http://www.familyservicephoto.pl/',
            'ICA': 'http://foto.ica.se/',
            'LP': 'http://laposte.photobox.fr/',
            'MC': 'http://mothercare-photo.com/',
            'PM': 'http://priceminister.photobox.fr/',
            'SP': 'http://secretdepolichinelle.photobox.fr/'
        };

    // $(document).ready(function () {


    if (window.location.href.indexOf('marketbar=') != -1) var market = true;

    // if bpx.obj exists
    if (pbx.obj != undefined) {

        // build another object from session for the sake of clarity
        var session = pbx.obj.session,
            componentsArray = [],
            documentCommentArray = [],
            cmsUrl = 'http://cms.photobox.com/content/edit/content_id/',
            channelSearchString = 'http://cms.photobox.com/content/search/search_term_path/()/search_term_name/()/search_term_keyword_ul/()/search_term_keyword/()/search_term_script/()/language/(all)/channel_id/(' + session.channel_id + ')',
            channelChangeUrl_1 = '/admin/switch?maturity_id=1&password=showmethecontent&action=Set+Maturity',
            channelChangeUrl_2 = '/admin/switch?maturity_id=2&password=showmethecontent&action=Set+Maturity',
            $componentsList = $('<select/>').change(function () {
                // get data-id from option and open cms composant
                var composantID = $(this).find(":selected").attr('data-id');
                window.open(cmsUrl + composantID, '_blank');
            }),
            $input = $('<input type="text" name="setChannel" value="' + session.channel_id + '">').bind('focus', function () {
                if (this.value == session.channel_id) {
                    this.value = "";
                }
            }).bind('keydown', function (event) {
                if (event.keyCode == 13) {

                    var url = location.href;

                    if (window.location.href.indexOf('channel=') != -1) {
                        var removeChannelString = '&channel=' + getQuerystring('channel');
                        url = url.replace(removeChannelString, '');
                    }

                    document.location.href = url + '&channel=' + this.value;
                }
            }),
            $searchToken = $(' <a href="#tokens">Tokens&nbsp;</a>').bind('click', function () {

                $('*[data-token]').each(function () {

                    $this = $(this);
                    token = $this.attr('data-token');

                    $this.prepend($('<a href="http://cms.photobox.com/contenttranslation/byid/token_id/(' + token + ')" target="_blank"> ' + token + ' </a>'));

                });

            }),
            $searchImages = $('<a href="#">Images ID</a>').bind('click', function () {
                var url = "http://ass";
                $('body img').each(function () {
                    // Check if match pattern
                    if ($(this).attr('src').indexOf(url) === 0) {
                        split = $(this).attr('src').split('/');
                        img = split[split.length - 1];
                        imgSrc = img.split('.');
                        $(this).after('<a style="color:red;z-index: 9999;position: relative;" target="_blank" href=http://cms.photobox.com/contentgraphic/edit/graphic_id/' + imgSrc[0] + '>' + imgSrc[0] + '</a>');
                    }
                });
            });

        // let's get all the comments, iframes doesn't like it
        $("*").not('iframe').contents().filter(function () {
            return this.nodeType == 8;
        }).each(function (i, e) {
            if (e.nodeValue.indexOf("CONTENT") != -1 && e.nodeValue.indexOf("unknown") == -1) {

                // populate the component array
                componentsArray.push(e.nodeValue);
            }
        });

        // get the page main component (usually the very last node of the document)
        $(document).contents().filter(function () {
            return this.nodeType == 8;
        }).each(function (j, f) {
            if (f.nodeValue.indexOf("START COMP") != -1 && f.nodeValue.indexOf("unknown") == -1) {

                documentCommentArray.push(f.nodeValue);
            }
        });

        var pageMainComponent = getComponent(documentCommentArray[0]);

        // generate contries menu

        $countriesMenu = $('<select/>').change(function () {
            // get data-site from option and open other page
            var otherSite = $(this).find(":selected").attr('data-site').replace('dhandler', '');
            window.open(otherSite, '_blank');
        });

        $.each(countries, function (pays, site) {
            $countriesMenu.append('<option value="" data-site="' + site + pageMainComponent.link + '"> ' + pays + '</option>');
        });

        // sort array by component name
        componentsArray.sort();

        // generate drop-down list and inject it into the list
        $.each(componentsArray, function (i, composant) {
            var composant = getComponent(composant);
            $componentsList.append('<option value="" data-path="' + composant.link + '" data-id="' + composant.id + '" style="color:white;"> ' + composant.link + ' ID: ' + composant.id + '</option>');
        });

        // color main component, css, js
        $componentsList.find("[data-path='" + pageMainComponent.link + "']").css('background', 'red');
        $componentsList.find("[data-path*='promo']").css('color', '#D85456');
        $componentsList.find("[data-path*='template']").css('color', '#6C7486');
        $componentsList.find("[data-path*='css']").css('color', '#16DA16');
        $componentsList.find("[data-path*='js'], [data-path*='script'], [data-path*='javascript']").css('color', '#FF7E00');
        $componentsList.find("[data-path*='analytics']").remove();

        // just element styles here
        var debugStyle = {
            'position': 'fixed',
            'background-color': '#FFFFFF',
            'color': '#000',
            'line-height': '20px',
            'text-align': 'left',
            'font-family': 'sans-serif',
            'padding': '10px',
            'z-index': '2000',
            'left': '0',
            'right': '0',
            'top': '0',
            'box-shadow': '0px 5px 11px rgba(0, 0, 0, 0.25)'
        };

        if (market) {
            debugStyle["background-color"] = '#C7FFAE';
            channelSearchString = '#';
        }

        var maturityStyle = {
            'float': 'right',
            'display': 'inline-block',
            'background': 'black',
            'color': 'white',
            'padding': '0 10px',
            'margin-right': '10px',
            'height': '20px'
        };

        var listStyle = {
            'width': '300px',
            'margin-right': '10px',
            'background': 'black',
            'color': 'white',
            'float': 'right',
            'border': 'none',
            'height': '20px'
        };

        var countryListStyle = {
            'width': '60px'
        };

        var idlistStyle = {
            'width': '56px',
            'margin-right': '10px',
            'background': 'black',
            'color': 'white',
            'float': 'right',
            'border': 'none',
            'height': '20px'
        };

        var inputStyle = {
            'width': '40px',
            'margin-right': '10px',
            'background': 'black',
            'color': 'white',
            'text-align': 'center',
            'float': 'right',
            'border': 'none',
            'height': '20px',
            'padding': '0 10px'
        };

        var $idList = $('<select id="idList"><option value="1" data-url="' + channelChangeUrl_1 + '">ID: 1</option><option value="2" data-url="' + channelChangeUrl_2 + '">ID: 2</option></select>').change(function () {
            // get data-id from option and open cms composant
            var dataUrl = $(this).find(":selected").attr('data-url');
            setNewChannel(dataUrl);
        });

        // build the data node outside the document
        var debugData = '<b>V' + toolbar.version + '</b> | <b>logged_in: </b>' + session.logged_in + ' | <b>service_url: </b>' + session.channel.service_url + ' | <b>channel: </b><a href="' + channelSearchString + '" target="_blank">' + session.channel_id + '</a> | <b>marketing_group: </b>' + session.channel.marketing_group + ' | ';

        // build node, inject data, assign styles
        var $debug = $('<div id="toolbar"></div>').html(debugData).css(debugStyle);

        // we need a close button with an attached click event, we can do this once
        var $close = $('<a>X</a>').css(maturityStyle).click(function () {
            $(this).parent().remove();
            $('body').css({
                'margin-top': '0'
            });
        });

        // prepend node and all childrens to the body
        $('body')
            .css({
                'margin-top': '40px'
            })
            .prepend(
                $debug
                .prepend($close)
                .append($searchToken)
                .append($('<span> | </span>'))
                .append($searchImages)
                .append($countriesMenu.css(listStyle).css(countryListStyle))
                .append($idList.css(idlistStyle))
                .append($input.css(inputStyle))
                .append($componentsList.css(listStyle)));

        if (market) $componentsList.remove();

        //console.log(debugData);

        // set the right channelId on dropdown list

        $idList.val(session.maturity_id);

    }

}

// two helper functions to help debug, into dom ready, to not pollute the main function

function getComponent(comment) {
    // this function takes a string built as a cms comment
    // example  END COMP "/css/fonts/neuzeit-grotesk" CONTENT "365021" 
    // and returns an object with component_path and component_id

    var commentArray = comment.split('"'),
        composant = {};

    if (commentArray[1] == undefined) {
        // console.log(commentArray);
        commentArray[1] = 'test';
    }

    composant.link = commentArray[1];
    composant.id = commentArray[3];

    return composant;

}

function setNewChannel(dataUrl) {

    $.ajax({
        url: dataUrl,
        type: 'POST',
        beforeSend: function () {
            //$('#toolbar').append($('<img src="https://secure.photobox.com/assets/content_graphics/91/65991.gif" style="background:white;" />'));
            $('#idList').find(":selected").text('wait');
        },
        success: function (data, textStatus) {
            if (textStatus == 'success') {
                location.reload();
            }
        }
    });

}
*/

$("head").append('<script type="text/javascript" src="http://assets.photobox.com/assets/content_graphics/files/V4/JS/toolbar/toolbar.js"></script>');
