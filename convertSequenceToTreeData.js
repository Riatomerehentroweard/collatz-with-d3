/*
 * @input: array of arrays containing a collatz sequences: e.g. [[1], [1,2], [1,2,4,8,16,5,10,3], [1,2,4,8,16,32,64,21]]
 * @output: object representing the tree to reconstruct all the sequences passed in the input: 
 * e.g.
 * {
        "name": 1,
        "children": [
            {
                "name": 2,
                "children": [
                    {
                        "name": 4,
                        "children": [
                            {
                                "name": 8,
                                "children": [
                                    {
                                        "name": 16,
                                        "children": [
                                            {
                                                "name": 5
                                            },
                                            {
                                                "name": 32
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
 */



//  TODO save interanlly as object an in the end map children to arrays with Object.values()

const convertSequenceToTreeData = (sequences) => {

    const tree = {};

    sortSequencesByFirstDigit(sequences);

    for (let i = 0; i < sequences.length; i++) {
        const element = sequences[i];

        if (!tree[element]) {
            tree[element] = {
                "name": element
            }
        }
        
    }

    var addElement = function addElement(treeLevel, sequence) {
        const number = sequence[0];

        if (!treeLevel[number]) {
            treeLevel[number] = {
                "name": number
            }
        }

        if (sequence.length > 1) {

            if (!treeLevel[number].children) {
                treeLevel[number].children = {}
            }

            addElement(treeLevel[number].children, sequence.slice(1, sequence.length))
        }
    }

    function sortSequencesByFirstDigit(sequences) {
        sequences.sort((first, second) => {
            if (first.length === 0) {
                return -1;
            }
            if (second.length === 0) {
                return 1;
            }
            if (first[0] < second[0]) {
                return -1;
            }
            return 1;
        });
    }
}
