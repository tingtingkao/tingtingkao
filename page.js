$(document).ready(function () {
    $('body').pagewalkthrough({

        steps:
            [
                {
                    wrapper: '',
                    margin: 0,
                    popup:
                    {
                        content: '#type-modal',
                        type: 'modal',
                        offsetHorizontal: 0,
                        offsetVertical: 0,
                        width: '400'
                    }
                },
                {
                    wrapper: '',
                    margin: 0,
                    popup:
                    {
                        content: '#step2',
                        type: 'modal',
                        offsetHorizontal: 0,
                        offsetVertical: 0,
                        width: '400'
                    }
                },
                {
                    wrapper: '',
                    margin: 0,
                    popup:
                    {
                        content: '#step3',
                        type: 'modal',
                        offsetHorizontal: 0,
                        offsetVertical: 0,
                        width: '400'
                    }
                },
                {
                    wrapper: '',
                    margin: '0',
                    popup:
                    {
                        content: '#done-walkthrough',
                        type: 'modal',
                        position: '',
                        offsetHorizontal: 0,
                        offsetVertical: 0,
                        width: '400'
                    }
                },

            ],
        name: 'Walkthrough'
    });

    $('body').pagewalkthrough('show');
});