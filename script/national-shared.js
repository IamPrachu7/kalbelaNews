

    /* =========================================================
       notification light
    ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const bell = document.getElementById("notificationBell");
    const dot = bell ? bell.querySelector(".notifyDot") : null;

    if (!bell || !dot) return;

    const COOLDOWN_TIME = 20000; // 20 seconds in milliseconds
    const hiddenTime = localStorage.getItem("notificationHiddenTime");

    // 1. Check on page load: Has it been less than 20 seconds since it was hidden?
    if (hiddenTime) {
        const elapsed = Date.now() - parseInt(hiddenTime, 10);
        if (elapsed < COOLDOWN_TIME) {
            dot.style.display = "none"; // Keep it hidden
            
            // Automatically bring it back after the remaining time finishes
            const remainingTime = COOLDOWN_TIME - elapsed;
            setTimeout(() => {
                dot.style.display = "block";
                localStorage.removeItem("notificationHiddenTime");
            }, remainingTime);
        } else {
            // 20 seconds have already passed, clear storage and show dot
            localStorage.removeItem("notificationHiddenTime");
        }
    }

    // 2. When the user hovers over the bell icon container
    bell.addEventListener("mouseenter", function () {
        dot.style.display = "none"; // Hide visually
        
        // Save the exact current timestamp
        localStorage.setItem("notificationHiddenTime", Date.now());

        // Bring it back automatically after 20 seconds if they stay on the page
        if (window.notificationTimeout) clearTimeout(window.notificationTimeout);
        
        window.notificationTimeout = setTimeout(() => {
            dot.style.display = "block";
            localStorage.removeItem("notificationHiddenTime");
        }, COOLDOWN_TIME);
    });
});


    /* =========================================================
       DESKTOP STICKY HEADER
       Only works at 992px and above
    ========================================================= */


    document.addEventListener('DOMContentLoaded', function () {

      const backToTop = document.getElementById('backToTop');

      if (!backToTop) {
        return;
      }

      const SHOW_AFTER_PX = 300;

      function toggleVisibility() {
        if (window.scrollY > SHOW_AFTER_PX) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      }

      // Set correct state on load (e.g. page opened mid-scroll)
      toggleVisibility();

      window.addEventListener('scroll', toggleVisibility, { passive: true });

      backToTop.addEventListener('click', function () {

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

      });

    });

    const stickyHead = document.getElementById('stickyHead');

    function updateStickyHeader() {
      if (!stickyHead) return;

      const isDesktop = window.matchMedia('(min-width: 992px)').matches;

      if (!isDesktop) {
        stickyHead.classList.remove('show');
        return;
      }

      if (window.scrollY > 80) {
        stickyHead.classList.add('show');
      } else {
        stickyHead.classList.remove('show');
      }
    }

    window.addEventListener('scroll', updateStickyHeader, {
      passive: true
    });

    window.addEventListener('resize', updateStickyHeader);

    updateStickyHeader();


    /* =========================================================
       MOBILE HAMBURGER MENU
    ========================================================= */

    const mobileMenuToggle =
      document.getElementById('mobileMenuToggle');

    const mobileMenuPanel =
      document.getElementById('mobileMenuPanel');

    let scrollYBeforeOpen = 0;


    function setPanelOffset() {

      if (!mobileMenuPanel) return;

      const headerEl =
        document.getElementById('minherder');

      if (!headerEl) return;

      const bottom =
        headerEl.getBoundingClientRect().bottom;

      mobileMenuPanel.style.top = `${bottom}px`;
    }


    window.addEventListener('resize', setPanelOffset);


    function openMobileMenu() {

      if (!mobileMenuToggle || !mobileMenuPanel) return;

      scrollYBeforeOpen = window.scrollY;

      setPanelOffset();

      mobileMenuPanel.classList.remove('d-none');

      document.body.classList.add('menu-open');

      document.body.style.top =
        `-${scrollYBeforeOpen}px`;

      mobileMenuToggle.setAttribute(
        'aria-expanded',
        'true'
      );

      const icon =
        mobileMenuToggle.querySelector('i');

      if (icon) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      }
    }


    function closeMobileMenu() {

      if (!mobileMenuToggle || !mobileMenuPanel) return;

      mobileMenuPanel.classList.add('d-none');

      document.body.classList.remove('menu-open');

      document.body.style.top = '';

      window.scrollTo(
        0,
        scrollYBeforeOpen
      );

      mobileMenuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      const icon =
        mobileMenuToggle.querySelector('i');

      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }


    if (mobileMenuToggle && mobileMenuPanel) {

      mobileMenuToggle.addEventListener(
        'click',
        () => {

          const isOpen =
            !mobileMenuPanel.classList.contains(
              'd-none'
            );

          isOpen
            ? closeMobileMenu()
            : openMobileMenu();
        }
      );


      mobileMenuPanel.addEventListener(
        'click',
        (e) => {

          if (e.target.closest('a')) {
            closeMobileMenu();
          }

        }
      );
    }


    function updateMobileCategoryOffset() {
      const ad = document.querySelector('.sticky-top-ad');
      const category = document.querySelector('.mobile-sticky-category');

      if (!ad || !category) return;

      const adHeight = ad.getBoundingClientRect().height;

      category.style.top = `${adHeight}px`;
    }

    window.addEventListener('load', updateMobileCategoryOffset);
    window.addEventListener('resize', updateMobileCategoryOffset);


















/* =========================================================
   KALBELA — PROJECT JAVASCRIPT (Optimized)
   Duplicate code removed. Caching added.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       STICKY HEADER
    ===================================================== */
    const stickyHead = document.getElementById("stickyHead");
    if (stickyHead) {
        function updateStickyHeader() {
            if (window.scrollY > 80) {
                stickyHead.classList.add("show");
            } else {
                stickyHead.classList.remove("show");
            }
        }
        window.addEventListener("scroll", updateStickyHeader, { passive: true });
        updateStickyHeader();
    }

    /* =====================================================
       MOBILE MENU
    ===================================================== */
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileMenuPanel = document.getElementById("mobileMenuPanel");

    if (mobileMenuToggle && mobileMenuPanel) {
        let scrollYBeforeOpen = 0;

        function openMobileMenu() {
            scrollYBeforeOpen = window.scrollY;
            mobileMenuPanel.classList.remove("d-none");
            document.body.classList.add("menu-open");
            mobileMenuToggle.setAttribute("aria-expanded", "true");
            const icon = mobileMenuToggle.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }
        }

        function closeMobileMenu() {
            mobileMenuPanel.classList.add("d-none");
            document.body.classList.remove("menu-open");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
            const icon = mobileMenuToggle.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
            window.scrollTo(0, scrollYBeforeOpen);
        }

        mobileMenuToggle.addEventListener("click", function () {
            const isOpen = !mobileMenuPanel.classList.contains("d-none");
            isOpen ? closeMobileMenu() : openMobileMenu();
        });

        mobileMenuPanel.addEventListener("click", function (event) {
            if (event.target.closest("a")) closeMobileMenu();
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !mobileMenuPanel.classList.contains("d-none")) {
                closeMobileMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth >= 992) closeMobileMenu();
        });
    }

    /* =========================================================
       STORY SLIDER (একবার)
    ========================================================= */
    const storyTrack = document.getElementById("storySliderTrack");
    const prevStoryBtn = document.getElementById("prevStoryBtn");
    const nextStoryBtn = document.getElementById("nextStoryBtn");

    if (storyTrack && prevStoryBtn && nextStoryBtn) {
        let currentIndex = 0;
        const totalCards = storyTrack.children.length;

        function updateStorySlider() {
            const shiftPercentage = currentIndex * 85;
            storyTrack.style.transform = `translateX(-${shiftPercentage}%)`;
            prevStoryBtn.classList.toggle("d-none", currentIndex === 0);
            nextStoryBtn.classList.toggle("d-none", currentIndex >= totalCards - 1);
        }

        nextStoryBtn.addEventListener("click", function () {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
                updateStorySlider();
            }
        });

        prevStoryBtn.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateStorySlider();
            }
        });

        updateStorySlider();
    }

    /* =========================================================
       VIDEO SLIDER (একবার)
    ========================================================= */
    const videoTrack = document.getElementById("videoTrack");
    const videoPrev = document.getElementById("videoPrev");
    const videoNext = document.getElementById("videoNext");
    const videoSlider = document.querySelector(".video-slider");

    if (videoTrack && videoPrev && videoNext && videoSlider) {
        let currentIndex = 0;

        function getVisibleCards() {
            if (window.innerWidth <= 575) return 1;
            if (window.innerWidth <= 991) return 2;
            return 4;
        }

        function getMoveDistance() {
            const card = videoTrack.querySelector(".video-card");
            if (!card) return 0;
            const cardWidth = card.getBoundingClientRect().width;
            const trackStyle = window.getComputedStyle(videoTrack);
            const gap = parseFloat(trackStyle.gap) || 0;
            return cardWidth + gap;
        }

        function positionSliderButtons() {
            const firstImage = videoTrack.querySelector(".video-card-image");
            if (!firstImage) return;
            const imageHeight = firstImage.offsetHeight;
            const buttons = videoSlider.querySelectorAll(".slider-button");
            buttons.forEach(function (btn) {
                btn.style.top = (imageHeight / 2) + "px";
                btn.style.transform = "translateY(-50%)";
            });
        }

        function updateVideoSlider() {
            const cards = videoTrack.querySelectorAll(".video-card");
            const totalCards = cards.length;
            const visibleCards = getVisibleCards();
            const maxIndex = Math.max(0, totalCards - visibleCards);
            currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
            const moveDistance = getMoveDistance();
            const translate = currentIndex * moveDistance;
            videoTrack.style.transform = `translateX(-${translate}px)`;
            videoPrev.classList.toggle("d-none", currentIndex === 0);
            videoNext.classList.toggle("d-none", currentIndex >= maxIndex);
            positionSliderButtons();
        }

        videoNext.addEventListener("click", function () {
            const totalCards = videoTrack.querySelectorAll(".video-card").length;
            const maxIndex = Math.max(0, totalCards - getVisibleCards());
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateVideoSlider();
            }
        });

        videoPrev.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateVideoSlider();
            }
        });

        window.addEventListener("resize", function () {
            updateVideoSlider();
        });

        updateVideoSlider();
    }

    /* =========================================================
       সারাদেশ — LOCATION FILTER (ক্যাশিং সহ)
    ========================================================= */
    const divisionSelect = document.getElementById("divisionSelect");
    const districtSelect = document.getElementById("districtSelect");
    const upazilaSelect = document.getElementById("upazilaSelect");
    const searchButton = document.getElementById("searchButton");
    const filterResult = document.getElementById("filterResult");

    if (divisionSelect && districtSelect && upazilaSelect && searchButton && filterResult) {
        const DATA_URL = "https://iqbalhasandev.github.io/bangladesh-geo-json/bangladesh-geo.json";
        const fallbackDivisions = [
            { name: "Dhaka", bn_name: "ঢাকা", districts: [] },
            { name: "Chattogram", bn_name: "চট্টগ্রাম", districts: [] },
            { name: "Khulna", bn_name: "খুলনা", districts: [] },
            { name: "Rajshahi", bn_name: "রাজশাহী", districts: [] },
            { name: "Sylhet", bn_name: "সিলেট", districts: [] },
            { name: "Rangpur", bn_name: "রংপুর", districts: [] },
            { name: "Mymensingh", bn_name: "ময়মনসিংহ", districts: [] },
            { name: "Barishal", bn_name: "বরিশাল", districts: [] }
        ];

        let locationData = [];

        function resetSelect(select, defaultText) {
            select.innerHTML = `<option value="">${defaultText}</option>`;
            select.classList.remove("selected");
        }

        function showTemporaryMessage(message) {
            filterResult.innerHTML = message;
            filterResult.classList.add("show");
        }

        function populateDivisions() {
            divisionSelect.innerHTML = `<option value="">বিভাগ</option>`;
            locationData.forEach((division, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = division.bn_name || division.name;
                divisionSelect.appendChild(option);
            });
        }

        async function loadLocationData() {
            try {
                // Check cache first
                const cached = localStorage.getItem('bangladeshData');
                if (cached) {
                    locationData = JSON.parse(cached);
                    populateDivisions();
                    return;
                }

                const response = await fetch(DATA_URL);
                if (!response.ok) throw new Error("Data loading failed");
                locationData = await response.json();

                // Save to cache
                localStorage.setItem('bangladeshData', JSON.stringify(locationData));
                populateDivisions();

            } catch (error) {
                console.warn("Full location data could not be loaded:", error);
                locationData = fallbackDivisions;
                populateDivisions();
            }
        }

        divisionSelect.addEventListener("change", function () {
            resetSelect(districtSelect, "জেলা");
            resetSelect(upazilaSelect, "উপজেলা");

            if (this.value === "") {
                districtSelect.disabled = true;
                upazilaSelect.disabled = true;
                return;
            }

            const division = locationData[this.value];
            const districts = division.districts || [];

            districts.forEach((district, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = district.bn_name || district.name;
                districtSelect.appendChild(option);
            });

            districtSelect.disabled = districts.length === 0;
            if (districts.length === 0) {
                showTemporaryMessage("এই বিভাগের জেলার তথ্য লোড করা যায়নি।");
            }
        });

        districtSelect.addEventListener("change", function () {
            resetSelect(upazilaSelect, "উপজেলা");

            if (this.value === "") {
                upazilaSelect.disabled = true;
                return;
            }

            const division = locationData[divisionSelect.value];
            const district = division.districts[this.value];
            const upazilas = district.upazilas || [];

            upazilas.forEach((upazila, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = upazila.bn_name || upazila.name;
                upazilaSelect.appendChild(option);
            });

            upazilaSelect.disabled = upazilas.length === 0;
            if (upazilas.length === 0) {
                showTemporaryMessage("এই জেলার উপজেলা তথ্য পাওয়া যায়নি।");
            }
        });

        searchButton.addEventListener("click", function () {
            const divisionIndex = divisionSelect.value;

            if (divisionIndex === "") {
                filterResult.innerHTML = "অনুগ্রহ করে একটি <strong>বিভাগ</strong> নির্বাচন করুন।";
                filterResult.classList.add("show");
                return;
            }

            const division = locationData[divisionIndex];
            let message = `<strong>${division.bn_name || division.name}</strong>`;
            const districtIndex = districtSelect.value;

            if (districtIndex !== "") {
                const district = division.districts[districtIndex];
                message += ` → <strong>${district.bn_name || district.name}</strong>`;
                const upazilaIndex = upazilaSelect.value;
                if (upazilaIndex !== "") {
                    const upazila = district.upazilas[upazilaIndex];
                    message += ` → <strong>${upazila.bn_name || upazila.name}</strong>`;
                }
            }

            filterResult.innerHTML = `আপনার নির্বাচিত এলাকা:<br>${message}`;
            filterResult.classList.add("show");
        });

        // Load data with caching
        loadLocationData();
    }

});




// photo gallery section 

/* =========================================================
   CAROUSEL DATA
========================================================= */

const galleryData = [

    {
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",

        caption:
            "জাদুঘরের বিভিন্ন চিত্র ঘুরে দেখেন প্রধানমন্ত্রী । ছবি: পিআইডি"
    },

    {
        image:
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85",

        caption:
            "বিভিন্ন অনুষ্ঠানে অতিথিদের সঙ্গে প্রধানমন্ত্রী । ছবি: পিআইডি"
    },

    {
        image:
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",

        caption:
            "অনুষ্ঠানে উপস্থিত অতিথিদের সঙ্গে মতবিনিময় । ছবি: পিআইডি"
    },

    {
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85",

        caption:
            "বিশেষ আয়োজনে অতিথিদের সঙ্গে প্রধানমন্ত্রী । ছবি: পিআইডি"
    },

    {
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",

        caption:
            "দেশের বিভিন্ন গুরুত্বপূর্ণ বিষয়ে আলোচনা । ছবি: পিআইডি"
    },

    {
        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",

        caption:
            "সামাজিক অনুষ্ঠানে অংশগ্রহণ করেন অতিথিরা । ছবি: পিআইডি"
    }

];



/* =========================================================
   ELEMENTS
========================================================= */

const mainImage =
    document.getElementById("mainImage");

const imageCaption =
    document.getElementById("imageCaption");

const thumbnailTrack =
    document.getElementById("thumbnailTrack");

const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");

const thumbPrev =
    document.getElementById("thumbPrev");

const thumbNext =
    document.getElementById("thumbNext");

const mainCarousel =
    document.getElementById("mainCarousel");



/* =========================================================
   CURRENT SLIDE
========================================================= */

let currentSlide = 0;

let thumbnailPosition = 0;



/* =========================================================
   CREATE THUMBNAILS
========================================================= */

function createThumbnails() {

    thumbnailTrack.innerHTML = "";

    galleryData.forEach(
        (item, index) => {

            const thumbnail =
                document.createElement("div");

            thumbnail.className =
                "thumbnail";

            if (index === 0) {
                thumbnail.classList.add("active");
            }


            thumbnail.innerHTML = `
                        <img
                            src="${item.image}"
                            alt="Thumbnail ${index + 1}">
                    `;


            thumbnail.addEventListener(
                "click",
                () => {

                    currentSlide = index;

                    updateCarousel();

                }
            );


            thumbnailTrack.appendChild(
                thumbnail
            );

        }
    );

}



/* =========================================================
   UPDATE CAROUSEL
========================================================= */

function updateCarousel() {

    /*
        Fade effect
    */

    mainImage.style.opacity = "0";


    setTimeout(() => {

        mainImage.src =
            galleryData[currentSlide].image;

        imageCaption.textContent =
            galleryData[currentSlide].caption;

        mainImage.style.opacity = "1";

    }, 150);



    /*
        Active thumbnail
    */

    document
        .querySelectorAll(".thumbnail")
        .forEach(
            (thumbnail, index) => {

                thumbnail.classList.toggle(
                    "active",
                    index === currentSlide
                );

            }
        );


    /*
        Make active thumbnail visible

        NOTE: this used to call activeThumbnail.scrollIntoView({block:"nearest", ...}).
        The thumbnail strip itself is positioned with a CSS transform (see
        thumbnailPosition / thumbTrack.style.transform above), not native
        scrolling, so scrollIntoView had no scroll container to act on
        *except* the page itself — which is exactly why the whole page was
        jumping down to the Photo Gallery section on every load and on every
        slide change. The thumbnail strip's own scrolling is already handled
        by the thumbNext/thumbPrev handlers, so this call was safe to remove.
    */

}



/* =========================================================
   NEXT
========================================================= */

function nextSlide() {

    currentSlide++;

    if (
        currentSlide >=
        galleryData.length
    ) {

        currentSlide = 0;

    }

    updateCarousel();

}



/* =========================================================
   PREVIOUS
========================================================= */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            galleryData.length - 1;

    }

    updateCarousel();

}



/* =========================================================
   BUTTON EVENTS
========================================================= */

nextButton.addEventListener(
    "click",
    nextSlide
);

prevButton.addEventListener(
    "click",
    previousSlide
);



/* =========================================================
   THUMBNAIL SCROLL
========================================================= */

thumbNext.addEventListener(
    "click",
    () => {

        const thumbnails =
            document.querySelectorAll(
                ".thumbnail"
            );

        if (
            thumbnailPosition <
            thumbnails.length - 4
        ) {

            thumbnailPosition++;

            const move =
                thumbnailPosition * 67;

            thumbnailTrack.style.transform =
                `translateX(-${move}px)`;

        }

    }
);



thumbPrev.addEventListener(
    "click",
    () => {

        if (
            thumbnailPosition > 0
        ) {

            thumbnailPosition--;

            const move =
                thumbnailPosition * 67;

            thumbnailTrack.style.transform =
                `translateX(-${move}px)`;

        }

    }
);



/* =========================================================
   KEYBOARD CONTROL
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight"
        ) {

            nextSlide();

        }

        if (
            event.key === "ArrowLeft"
        ) {

            previousSlide();

        }

    }
);



/* =========================================================
   TOUCH SWIPE
========================================================= */

let touchStartX = 0;

let touchEndX = 0;


mainCarousel.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


mainCarousel.addEventListener(
    "touchend",
    (event) => {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    { passive: true }
);


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    if (Math.abs(difference) < 50) {
        return;
    }


    if (difference > 0) {

        nextSlide();

    } else {

        previousSlide();

    }

}



/* =========================================================
   AUTO PLAY
========================================================= */

let autoPlay =
    setInterval(
        nextSlide,
        6000
    );


/*
   Stop autoplay when user interacts
*/

mainCarousel.addEventListener(
    "mouseenter",
    () => {

        clearInterval(autoPlay);

    }
);


mainCarousel.addEventListener(
    "mouseleave",
    () => {

        autoPlay =
            setInterval(
                nextSlide,
                6000
            );

    }
);



/* =========================================================
   INITIALIZE
========================================================= */

createThumbnails();

updateCarousel();
