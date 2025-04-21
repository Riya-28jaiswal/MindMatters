{/* <script>
        // JavaScript code for showing/hiding sections
        function showSection(sectionId) {
            // Hide all sections
            var sections = document.getElementsByTagName('section');
            for (var i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
            }
            // Show the selected section
            var sectionToShow = document.getElementById(sectionId);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
            }
        }
    </script> */}
    // JavaScript code for showing/hiding sections
    function showSection(sectionId) {
        // Hide all sections
        var sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }
        // Show the selected section
        var sectionToShow = document.getElementById(sectionId);
        console.log(sectionToShow);
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
    }