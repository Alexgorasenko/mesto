(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const r=function(){function t(e,r,n,o,i,u,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.name,this._imageUrl=e.link,this._likes=e.likes,this._cardId=e._id,this._owner=e.owner,this._templateSelector=r,this._template=this._getTemplate(),this.element=this._template.querySelector(".place-card"),this._cardImage=this.element.querySelector(".place-card__image"),this._cardText=this.element.querySelector(".place-card__title"),this._delete=this.element.querySelector(".place-card__delete"),this._like=this.element.querySelector(".place-card__like"),this._likeCount=this.element.querySelector(".place-card__like-count"),this._setEventListeners(),this._handleCardClick=n,this._handleCardDeleteClick=o,this._userId=i,this._putLike=u,this._deleteLike=c}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._delete.addEventListener("click",(function(){t._clickCardDelete()})),this._like.addEventListener("click",(function(){t.toggleLike(t)})),this._cardImage.addEventListener("click",(function(){t._clickCardOpenPopupImg()}))}},{key:"toggleLike",value:function(){this._like.classList.contains("place-card__like_active")?this._deleteLike(this):this._putLike(this)}},{key:"getId",value:function(){return this._cardId}},{key:"_clickCardOpenPopupImg",value:function(){this._handleCardClick(this._title,this._imageUrl)}},{key:"_clickCardDelete",value:function(){this._handleCardDeleteClick(this._cardId,this.element)}},{key:"clickCardLike",value:function(t){this._like.classList.toggle("place-card__like_active"),this._likeCount.textContent=t.likes.length}},{key:"renderCard",value:function(){var t=this;return this._cardImage.src=this._imageUrl,this._cardImage.alt=this._title,this._cardText.textContent=this._title,this._likeCount.textContent=this._likes.length,this._userId!==this._owner._id&&(this._delete.style.display="none"),this._likes.forEach((function(e){t._userId===e._id&&t._like.classList.add("place-card__like_active")})),this.element}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=r}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"prependItem",value:function(t){this._container.prepend(t)}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function a(t,e,r){return(e=l(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}const s=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_showInputError",(function(t){var e=n._form.querySelector(".".concat(t.id,"-error"));t.classList.add(n._setting.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(n._setting.errorClass)})),a(this,"_hideInputError",(function(t){var e=n._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(n._setting.inputErrorClass),e.classList.remove(n._setting.errorClass),e.textContent=""})),a(this,"_isValid",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t)})),a(this,"_hasInvalidInput",(function(t){return t.some((function(t){return!t.validity.valid}))})),a(this,"_toggleButtonState",(function(){n._hasInvalidInput(n._inputs)?n._button.disabled=!0:n._button.disabled=!1})),a(this,"resetValidation",(function(){n._toggleButtonState(),n._inputs.forEach((function(t){n._hideInputError(t)}))})),a(this,"_setEventListeners",(function(){n._inputs.forEach((function(t){t.addEventListener("input",(function(){n._isValid(t),n._toggleButtonState()}))})),n._toggleButtonState()})),this._form=r,this._setting=e,this._inputs=Array.from(this._form.querySelectorAll(this._setting.inputSelector)),this._button=this._form.querySelector(this._setting.submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupCloseBotton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseBotton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()}))}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},m.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(o){var r=b(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitCallback=e,r._popupForm=r._popup.querySelector(".popup__form"),r._formInputList=r._popupForm.querySelectorAll(".popup__input"),r._formButton=r._popupForm.querySelector(".popup__save"),r._formButtonText=r._formButton.textContent,r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._formInputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"renderLoading",value:function(t,e){t?this._formButton.textContent=e:(this._formButton.textContent=this._formButtonText,this.close())}},{key:"setEventListeners",value:function(){var t=this;m(b(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues())}))}},{key:"close",value:function(){m(b(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(o){var r=j(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup-img__image"),e._text=e._popup.querySelector(".popup-img__header"),e}return e=u,(r=[{key:"open",value:function(t){k(j(u.prototype),"open",this).call(this),this._image.src=t.link,this._image.alt=t.name,this._text.textContent=t.name}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(n);if(o){var r=I(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitCallback=e,r._deleteButton=r._popup.querySelector(".popup-place__delete-button"),r._deleteButtonText=r._deleteButton.textContent,r}return e=u,(r=[{key:"open",value:function(t,e){C(I(u.prototype),"open",this).call(this),this.cardId=t,this.card=e,this._deleteButton.addEventListener("click",this._submitCallback)}},{key:"renderLoading",value:function(t,e){this._deleteButton.textContent=t?e:this._deleteButtonText}},{key:"close",value:function(){C(I(u.prototype),"close",this).call(this),this._deleteButton.removeEventListener("click",this._submitCallback)}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseBotton.addEventListener("click",(function(){t.close()}))}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var B=function(){function t(e){var r=e.name,n=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._about=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar,o=t._id;this._name.textContent=e,this._about.textContent=r,this._avatar.src=n,this.userId=o}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}var V=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.url,this.headers=e.headers}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"patchUserInfo",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:r})}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"patchAvatar",value:function(t){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"getPlaceCards",value:function(){return fetch("".concat(this.url,"/cards"),{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"postNewCard",value:function(t){var e=t.name,r=t.link;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:r})}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t._id),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"putLike",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}}])&&U(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"6d7b7fcc-02c2-486a-98c6-85a70a7d5eaf","Content-Type":"application/json"}}),A=document.querySelector(".profile__button_type_edit"),D=document.querySelector(".popup-editing"),N=D.querySelector(".popup__input_type_name"),F=D.querySelector(".popup__input_type_vocation"),J=document.forms["form-edit-profile"],G=document.forms["form-edit-avatar"],H=document.querySelector(".places"),M=(document.querySelector(".popup-add"),document.forms["form-add-place"]),z=document.querySelector(".profile__add"),$=document.querySelector(".profile__avatar-edit"),K={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active",submitButtonSelector:".popup__save"};function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var W=new B({name:".profile__name",about:".profile__vocation",avatar:".profile__avatar"});Promise.all([V.getUserInfo(),V.getPlaceCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];W.setUserInfo(o),X.renderItems(i)}));var X=new i((function(t){X.addItem(tt(t))}),H),Y=function(t){V.putLike(t.getId()).then((function(e){t.clickCardLike(e)}))},Z=function(t){V.deleteLike(t.getId()).then((function(e){t.clickCardLike(e)}))},tt=function(t){var e=new r(t,"#item",(function(){at.open(t)}),(function(){ct.open(t,e.element)}),W.userId,Y,Z);return e.renderCard()},et=new s(K,J),rt=new s(K,M),nt=new s(K,G),ot=new _(".popup-add",(function(t){ot.renderLoading(!0,"Создание..."),V.postNewCard(t).then((function(t){X.addItem(tt(t))})).finally((function(){ot.renderLoading(!1)}))})),it=new _(".popup-editing",(function(t){it.renderLoading(!0,"Coхранение..."),V.patchUserInfo(t).then((function(t){W.setUserInfo(t)})).finally((function(){it.renderLoading(!1)}))})),ut=new _(".popup-avatar-edit",(function(t){ut.renderLoading(!0,"Coхранение..."),V.patchAvatar(t.avatar).then((function(t){W.setUserInfo(t)})).finally((function(){ut.renderLoading(!1)}))})),ct=new T(".popup-delete",(function(){ct.renderLoading(!0,"Удаление..."),V.deleteCard(ct.cardId).then((function(){ct.close(),ct.card.remove()})).finally((function(){ct.renderLoading(!1)}))})),at=new E(".popup-img");it.setEventListeners(),ut.setEventListeners(),et.enableValidation(),rt.enableValidation(),nt.enableValidation(),ot.setEventListeners(),at.setEventListeners(),ct.setEventListeners(),$.addEventListener("click",(function(){ut.open(),nt.resetValidation()})),A.addEventListener("click",(function(){var t=W.getUserInfo();N.value=t.name,F.value=t.about,et.resetValidation(),it.open()})),z.addEventListener("click",(function(){ot.open(),rt.resetValidation()}))})();