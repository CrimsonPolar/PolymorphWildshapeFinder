const usp = new URLSearchParams();

// Jquery UI configuration
$(function() {
    var environments = [
        'Aquatic',
        'Arctic',
        'Cave',
        'Coast',
        'Desert',
        'Dungeon',
        'Forest',
        'Grassland',
        'Mountain',
        'Planar',
        'Ruins',
        'Swamp',
        'Underground',
        'Urban'
    ];
    $('#search-environment').autocomplete({
        source: environments
    });

    var sizes = [
        'Tiny',
        'Small',
        'Medium',
        'Large',
        'Huge',
        'Gargantuan'
    ];
    $('#search-size').autocomplete({
        source: sizes
    });
});
