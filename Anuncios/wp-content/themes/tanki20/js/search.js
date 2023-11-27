jQuery(function($) {
    var searchTerm = '';
    var filterPostType = 'all';
    var filterDateType = 'DESC';

    $('.search-input-modal').keydown(function() {
        searchTerm = $.trim($(this).val());
    });

    // TODO: передавать правильно параметры фильтра
    $('.date-filter-wrap span').on('click', function() {
        filterDateType = $(this).attr('data-filter-date');
        console.log(filterDateType);
        $.ajax({
            url: ajaxurl, // обработчик // Ссылка на AJAX обработчик WP
            type: 'POST', // Отправляем данные методом POST
            data: {
                'action': 'ba_ajax_search', // Вызываемое действие, которое мы описали в functions.php
                'term': searchTerm, // Отправляемые данные поля ввода
                'type_post': filterPostType,
                'type_post_date': filterDateType
            },
            beforeSend: function() { // Перед отправкой данных
                $('.result-search .result-search-list').fadeOut(); // Скроем блок результатов
                $('.result-search .result-search-list').empty(); // Очистим блок результатов
                $('.result-search .preloader').show(); // Покажем загрузчик
            },
            success: function(result) { // После выполнения поиска
                $('.result-search .preloader').hide(); // Скроем загрузчик
                $('.result-search .result-search-list').fadeIn().html(result); // Покажем блок результатов и добавим в него полученные данные
            }
        });
    })

    $('.type-anonce-filter span').on('click', function() {
        filterPostType = $(this).attr('data-filter');
        console.log(filterPostType);
        $.ajax({
            url: ajaxurl, // обработчик // Ссылка на AJAX обработчик WP
            type: 'POST', // Отправляем данные методом POST
            data: {
                'action': 'ba_ajax_search', // Вызываемое действие, которое мы описали в functions.php
                'term': searchTerm, // Отправляемые данные поля ввода
                'type_post': filterPostType,
                'type_post_date': filterDateType
            },
            beforeSend: function() { // Перед отправкой данных
                $('.result-search .result-search-list').fadeOut(); // Скроем блок результатов
                $('.result-search .result-search-list').empty(); // Очистим блок результатов
                $('.result-search .preloader').show(); // Покажем загрузчик
            },
            success: function(result) { // После выполнения поиска
                $('.result-search .preloader').hide(); // Скроем загрузчик
                $('.result-search .result-search-list').fadeIn().html(result); // Покажем блок результатов и добавим в него полученные данные
            }
        });
    })

    $('.search-input-modal').keyup(function() {
        if ($.trim($(this).val()) != searchTerm) { // Если новое значение не равно старому, идем дальше
            searchTerm = $.trim($(this).val());
            if (searchTerm.length > 2) { // Если введено больше 2-х символов, идем дальше
                $.ajax({
                    url: ajaxurl, // обработчик // Ссылка на AJAX обработчик WP
                    type: 'POST', // Отправляем данные методом POST
                    data: {
                        'action': 'ba_ajax_search', // Вызываемое действие, которое мы описали в functions.php
                        'term': searchTerm, // Отправляемые данные поля ввода
                        'type_post': filterPostType
                    },
                    beforeSend: function() { // Перед отправкой данных
                        $('.result-search .result-search-list').fadeOut(); // Скроем блок результатов
                        $('.result-search .result-search-list').empty(); // Очистим блок результатов
                        $('.result-search .preloader').show(); // Покажем загрузчик
                    },
                    success: function(result) { // После выполнения поиска
                        $('.result-search .preloader').hide(); // Скроем загрузчик
                        $('.result-search .result-search-list').fadeIn().html(result); // Покажем блок результатов и добавим в него полученные данные
                    }
                });
            }
        }
    });

    $('.search-input-modal').focusin(function() {
        $('.result-search').fadeIn();
    })

    // $(document).mouseup(function(e) {
    //   if ((!$('.result-search').is(e.target) && $('.result-search').has(e.target).length === 0) && (!$('.search-input-modal').is(e.target) && $('.search-input-modal').has(e.target).length === 0)) {
    //     $('.result-search').fadeOut();
    //   }
    // });
});