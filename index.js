const { version } = require('vue');

const withStyledWrapper = (story, { parameters }) => {
    if (!parameters.wrapperStyles) {
        return story();
    }

    const styled = parseInt(version) === 3
        ? require('@magister_zito/vue3-styled-components').default
        : require('vue-styled-components').default;

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
