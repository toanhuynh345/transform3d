const api_url = "https://testapi.io/api/toanhuynh345//";
Flashcard = function (options) {
    return this.init(options);
}
Flashcard.prototype = {
    card: null,
    dataFlashCard: null,
    slideFront: null,
    slideBack: null,
    init: function (options) {
        var that = this;
        that.card = $(options.card) || null;
        that.slideFront = $(options.slideFront) || null;
        that.slideBack = $(options.slideBack) || null;
        that.getDataFlashCard().setDataFlashCard().eventFlipFlashCard();
        console.log(that.dataFlashCard.name, "success");
        return that;
    },
    eventFlipFlashCard: function () {
        var that = this;
        that.card.click(function () {
            that.card.toggleClass('is-flipped');
        })
        return that;
    },
    getDataFlashCard: function () {
        var that = this;
        //jQuery => $
        jQuery.ajax({
            url: api_url + "api/jp-learning-flashcard",
            type: "GET",
            datatype: "application/json",
            contentType: "text/plain",
            async: false,
            success: function (response) {
                that.dataFlashCard = response;
                // Hỏi anh Đô Process Callback Cho bất đồng bộ
            }
        });
        return that
    },
    setDataFlashCard: function(){
        var that = this;
        that.slideFront.html(that.dataFlashCard.name);
        that.slideBack.html(that.dataFlashCard.jp_name);
        return that;
    }
}