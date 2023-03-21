const { isVue3 } = require('vue-demi');

const withStyledWrapper = (story, { parameters }) => {
    const styled = isVue3
        ? require('@magister_zito/vue3-styled-components').default
        : require('vue-styled-components').default;

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
