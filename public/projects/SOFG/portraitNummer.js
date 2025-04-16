<script>
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the page from reloading

        // Get values from the form inputs
        const setName = document.getElementById('setName').value;
        const setCount = parseInt(document.getElementById('setCount').value);
        const setType = document.querySelector('input[name="imageType"]:checked')?.value;

        // You can now use these values however you'd like
        console.log('Set Name:', setName);
        console.log('Set Count:', setCount);
        console.log('Image Type:', setType);

        // Example: assigning them to variables or objects
        // let formData = { setName, setCount, setType };
    });
</script>