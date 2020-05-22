let navOpen = false;

$('.navBtn').on('click', function () {
    $('.pagePoints').css('transition', 'transform 0.5s');
    $('.media').css('transition', 'transform 0.5s');

    if (!navOpen) {
        $('.pagePoints').css('transform', 'translateX(0)');
        $('.media').css('transform', 'translateX(0)');
    } else {
        $('.pagePoints').css('transform', 'translateX(-140%)');
        $('.media').css('transform', 'translateX(-100%)');
    }
    navOpen = !navOpen;

})

$(window).on('resize', function () {
    if ($(window).width() > 650) {
        $('.pagePoints').css('transition', '');
        $('.pagePoints').css('transform', '');
        $('.media').css('transition', '');
        $('.media').css('transform', '');
    }
})


let page4_model = $('.page4_model');

function addModel() {
    let container = $('<div>');
    let form = $('<form>');
    let labelEmail = $('<label>');
    let inputEmail = $('<input>');
    let labelPhone = $('<label>');
    let inputPhone = $('<input>');
    let labelProject = $('<label>');
    let textareaProject = $('<textarea>');
    let buttonElem = $('<button>');
    buttonElem.addClass('send');

    labelEmail.text('</Ваша почта>');
    inputEmail.attr('type', 'email');
    labelPhone.text('</Ваш телефон>');
    inputPhone.attr('type', 'number');
    labelProject.text('</Коротко о вашем проекте>');
    textareaProject.text();
    buttonElem.text('Отправить');

    let modelContainer = $('<div>')
    modelContainer.addClass('model_container');

    let innerModel = $('<div>');
    innerModel.addClass('innerModel');

    container.append(form);
    container.append(labelEmail);
    container.append(inputEmail);
    container.append(labelPhone);
    container.append(inputPhone);
    container.append(labelProject);
    container.append(textareaProject);
    container.append(buttonElem);
    container.addClass('page4_form');

    innerModel.append(container);
    modelContainer.append(innerModel);
    page4_model.append(modelContainer);

    modelContainer.on('click', function () {
        modelContainer.css('display', 'none')
    })

    container.on('click', function (event) {
        event.stopPropagation();
    })


}

$('#btn').on('click', function () {
    console.log('----');
    return addModel()
});