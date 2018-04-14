(function () {
    'use strict';

angular
.module('app.module')
 .controller('EntryController', EntryController);

    EntryController.$inject = ['logger', '$state', 'employeeGridService', 'deptService', '$scope'];
    /* @ngInject */
    function EntryController(logger, $state, employeeGridService, deptService, $scope) {
       
        //datePicker
        $scope.datePickerOptions= {
            format: 'dd-MMM-yyyy',
            max: new Date(),
            readonly: true
        };
        // date of birth
        $scope.datePickerbirth= {
            format: 'dd-MMM-yyyy',
            min: new Date(1950,1,1),
            max: new Date(2002,12,0),
            readonly: true
        };
        // date of joining 
        $scope.dateJoining= {
            format: 'dd-MMM-yyyy',
            max: new Date(),
            readonly: true
        };
        // date of nationality 
        $scope.Nationalitydate= {
            format: 'dd-MMM-yyyy',
            max: new Date(),
            readonly: true
        };
        // date of Attestation 
        $scope.Attestationdate= {
            format: 'dd-MMM-yyyy',
            max: new Date(),
            readonly: true
        };
        // date of officer 
        $scope.Officerdate= {
            format: 'dd-MMM-yyyy',
            max: new Date(),
            readonly: true
        };
        //school selector
       $scope.unitSelectOptions = {
            optionLabel: 'Select Unit',
            dataTextField: 'name',
            dataValueField: 'id',
            valuePrimitive: false,
                          
        };
         //designation 
         $scope.designationOptns = {
            optionLabel: 'Select Designation',
            dataTextField: 'name',
            dataValueField: 'id'
        };
        // Gender selector
        $scope.genderOptns = {
            optionLabel: 'Select Gender',
            dataSource: [
                'Male',
                'Female'
            ]
        };
        // present designation 
        $scope.presentdesignation = {
            optionLabel: 'Select Designation',
            dataSource: [
                'Professor',
                'Assistant Professor',
                'Feculty',
                'Assistant Feculty',
                'Lab Assistant'
            ]
        };
         // present designation 
         $scope.Category = {
            optionLabel: 'Select Category',
            dataSource: [
                'GE',
                'OBC',
                'SC',
                'ST',
                'Other'
            ]
        };
 // ------------------------------ FUNCTIONS -------------------------------------------- //
     //Fetch All Units
         //Fetch All Units
        NS.Department.get(null, -1).then(function (res) {
            //Adding 'All Units' option to it.
            res.data.push({
                id: 'all',
                name: 'All Units'
            });
            $scope.$apply(function () {
                $scope.unitSelectOptions.dataSource = res.data;
                $scope.editUnitSelectOptions.dataSource = res.data;
            });
        }, function (err) {
            logger.error('Unable to fetch Units. Try again later.');
        });
         //Fetch Designations
         NS.Employee.getDesignation().then(function (res) {
            $scope.designationOptns.dataSource = res;
        }, function (err) {
            logger.error('Unable to fetch Designations');
        });
     // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {
        
                 // check to make sure the form is completely valid
                    if (isValid) {
                     alert('your form is submited');
                     }
                     else{
                        alert('Please fill valid data in all mandatory fields ');
                     }
                };
                

    }
})();
