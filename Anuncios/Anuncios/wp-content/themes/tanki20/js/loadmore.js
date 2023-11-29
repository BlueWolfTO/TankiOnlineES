jQuery(function($) {
    $('#true_loadmore').click(function() {
        var txtLangMore = $(this).text();
        $(this).addClass('spinner-active'); // изменяем текст кнопки, вы также можете добавить прелоадер
        $('.txt-loadmore').text('');
        var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page': current_page
        };
        $.ajax({
            url: ajaxurl, // обработчик
            data: data, // данные
            type: 'POST', // тип запроса
            success: function(data) {
                if (data) {
                    $('.loadmore-container').before(data); // вставляем новые посты
                    $('#true_loadmore').removeClass('spinner-active');
                    $('.txt-loadmore').text(txtLangMore); // вставляем новые посты
                    current_page++; // увеличиваем номер страницы на единицу
                    if (current_page == max_pages) $(".loadmore-container").remove(); // если последняя страница, удаляем кнопку
                } else {
                    $('.loadmore-container').remove(); // если мы дошли до последней страницы постов, скроем кнопку
                }
            }
        });
    });
});