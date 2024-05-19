"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[8939],{8939:function(e,n,o){o.r(n),n.default="import EmblaCarousel from 'embla-carousel';\nimport Fade from 'embla-carousel-fade';\nimport { addDotBtnsAndClickHandlers } from '../EmblaCarouselDotButton';\nimport { addPrevNextBtnsClickHandlers } from '../EmblaCarouselArrowButtons';\nimport '../css/base.css';\nimport '../css/sandbox.css';\nimport '../css/embla.css';\n\nconst OPTIONS = {};\n\nconst emblaNode = document.querySelector('.embla');\nconst viewportNode = emblaNode.querySelector('.embla__viewport');\nconst prevBtn = emblaNode.querySelector('.embla__button--prev');\nconst nextBtn = emblaNode.querySelector('.embla__button--next');\nconst dotsNode = document.querySelector('.embla__dots');\n\nconst emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Fade()]);\n\nconst removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtn, nextBtn);\nconst removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode);\n\nemblaApi\n    .on('destroy', removePrevNextBtnsClickHandlers)\n    .on('destroy', removeDotBtnsAndClickHandlers);\n"}}]);
//# sourceMappingURL=8939-7ca3caf286688a4c1de6.js.map