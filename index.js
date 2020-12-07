const styled = require('vue-styled-components').default;

const withStyledWrapper = (story, { parameters }) => {
    if (!parameters.wrapperStyles) {
        return story();
    }

    return {
        components: {
            StyledWrapper: styled.section`${ parameters.wrapperStyles }`,
        },
        template: `
            <styled-wrapper>
                <story />
            </styled-wrapper>
        `,
    };
};

module.exports = withStyledWrapper;
