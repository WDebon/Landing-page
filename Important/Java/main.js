$('#English').click(function () { 
        $('[lang="en"]').show();
        $('[lang="pt"]').hide();
}),

$('#Portugues').click(function () { 
        $('[lang="en"]').hide();
        $('[lang="pt"]').show();
});