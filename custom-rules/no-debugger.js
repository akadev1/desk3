
module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "disallow the use of `debugger`",
            category: "Possible Errors",
            recommended: true
        },
        schema: [] // no options
    },
    create: function(context) {
        return {
            DebuggerStatement(node) {
                context.report({
                    node,
                    message: "Unexpected `debugger` statement."
                });
            }
        };
    }
};
