<script type="module">
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipeDynamicCaption from 'https://unpkg.com/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallerySelector: '#gallery',
  childSelector: '.pswp-gallery__item',
  pswpModule: () => import('photoswipe/dist/photoswipe.esm.js'),

  // Optional padding for images,
  // note that this is an option of PhotoSwipe, not a plugin
  paddingFn: (viewportSize) => {
    return {
      top: 30, bottom: 30, left: 70, right: 70
    }
  },
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  // Plugins options, for example:
  type: 'auto',
});

// make sure you init photoswipe core after plugins are added
lightbox.init();
</script>