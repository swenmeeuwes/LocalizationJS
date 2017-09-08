var localization = localization || {};

(function(localization) {
    var Language = function() {
        this.currentLanguage = null;
    };

    Language.DEFAULT_LANGUAGE = 'en-US';

    Language.setLanguage = function(language) {
        var localizedElements = document.querySelectorAll('[lang]:not(title)');
        for (var i = 0; i < localizedElements.length; i++) {
            var item = localizedElements[i];
            var displayValue = item.lang === language ? 'inherit' : 'none';
            item.style.display = displayValue;
        }
    };

    // Export
    localization.Language = Language;
}(localization));
