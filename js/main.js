/**
 * Caesar Su - Personal Website
 * Main JavaScript File
 */

$(document).ready(function() {
    'use strict';

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // ========================================
    // Fade In Animation on Scroll
    // ========================================
    function checkFadeIn() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom - 100) {
                $(this).addClass('visible');
            }
        });
    }

    // Initial check
    checkFadeIn();
    
    // Check on scroll
    $(window).on('scroll', checkFadeIn);

    // ========================================
    // Active Navigation Link
    // ========================================
    function setActiveNavLink() {
        var currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        $('.navbar-nav .nav-link').each(function() {
            var linkHref = $(this).attr('href');
            if (linkHref === currentPage) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    setActiveNavLink();

    // ========================================
    // Filter Chips (for Selected Work page)
    // ========================================
    $('.filter-chip').on('click', function() {
        var filter = $(this).data('filter');
        
        // Update active state
        $('.filter-chip').removeClass('active');
        $(this).addClass('active');
        
        // Filter cards
        if (filter === 'all') {
            $('.work-card').fadeIn(300);
        } else {
            $('.work-card').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
    });

    // ========================================
    // Navbar Collapse on Link Click (Mobile)
    // ========================================
    $('.navbar-nav .nav-link').on('click', function() {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // ========================================
    // Scroll to Top on Page Load
    // ========================================
    if (window.location.hash === '') {
        window.scrollTo(0, 0);
    }

    // ========================================
    // Hero Scroll Indicator Click
    // ========================================
    $('.hero-scroll-indicator').on('click', function() {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 800);
    });

    // ========================================
    // Add fade-in class to sections
    // ========================================
    $('.solving-card, .approach-step, .featured-card, .content-card, .phase-card').addClass('fade-in');
    
    // Re-check fade in after adding classes
    checkFadeIn();

});

