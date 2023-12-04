//Adam Ashraf bin Azlan 2210325 Section 02

document.addEventListener('DOMContentLoaded', function () {
    var deductionForm = document.getElementById('deductionForm');

    deductionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate the deduction period
        var startDate = new Date(
            document.getElementById('deductionFromYear').value,
            document.getElementById('deductionFromMonth').selectedIndex
        );

        var endDate = new Date(
            document.getElementById('deductionToYear').value,
            document.getElementById('deductionToMonth').selectedIndex
        );

        if (startDate > endDate) {
            alert('Invalid deduction period. Please select a valid start and end date.');
        } else {
            alert('Form submitted successfully!');
            // Perform other actions if needed
        }
    });
});

