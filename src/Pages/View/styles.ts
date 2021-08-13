import styled from 'styled-components';

// @types
import { styledViewProps } from '../../types/View'

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';

export const ViewContainer = styled.div<styledViewProps>`
    margin-top: 2rem;
    width: 100%;

    nav {
        margin-bottom: 2rem;
        font-size: 1.2rem;
    }

    main#view-main {
        width: 100%;
        height: 100%;

        section:first-child {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            div#image {
                width: 30%;
                height: 30rem;

                background: url(${props => props.image});
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;

                border-radius: 1rem;
            }

            div#options {
                width: 65%;
                height: 30rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;

                nav {
                        margin-bottom: 2rem;

                        h1 {
                            font-size: 2.5rem;
                            font-weight: bold;
                            margin-bottom: 1rem;
                        }
                    }
                    
                    span {
                        font-size: 1.2rem;
                        color: var(--color-gray-5);
                    }
                }
                div#select-options {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;

                    ol {
                        height: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                        li {
                            margin-top: 1.5rem;
                            font-size: 1.5rem;


                            label {
                                display: flex;
                                align-items: center;
                                font-size: 1.5rem;
                                


                                input {
                                    display: none;
                                }
                                div.radio {
                                    width: 2rem;
                                    height: 2rem;

                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    
                                    background-color: var(--color-gray-2);
                                    
                                    border-radius: .5rem;
                                    
                                    margin-right: 1rem;
                                    }
                                }
                            }
                        }

                    footer {
                        width: 100%;

                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;

                        span#current-price {
                            width: 100%;
                            margin-bottom: 2rem;
                            
                            font-size: 2rem;
                            font-weight: bold;
                            color: var(--color-white);
                            
                            order: 1;
                            
                        }

                        span:last-child {
                            width: 57%;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                            order: 1;
                        }

                        /* button */
                        label {
                            max-width: 22rem;
                            height: 4rem;
                            
                            margin-right: 2rem;
                            order: 2;
                        }

                        img {
                            width: 11rem;
                            height: auto;
                            order: 3;
                        }
                    }
                }
            }

        section:last-child {
            margin-top: 2rem;
            h2 {
                font-size: 2rem;
                font-weight: bold;
                margin-bottom: 2rem;
            }

            p#desc {
                font-size: 1.5rem;
                line-height: 1;
            }
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 0;
        margin-bottom: 2rem;

        nav {
            margin-top: 2rem;
        }

        main#view-main {
            section:first-child {
                flex-direction: column;

                div#image {
                    width: 100%;
                    height: 23rem;
                }

                div#options {
                    width: 100%;
                    height: 100%;
                    margin-top: 0;

                    nav {
                        h1 {
                            font-size: 2rem;
                            font-weight: bold;
                            margin-bottom: 1rem;
                        }

                        span {
                            font-size: 1rem;
                        }
                    }

                footer {
                    align-items: center;
                    justify-content: space-between;

                    span#current-price {
                        width: 50%;
                     
                        order: 1;
                     
                        color: var(--color-white);
                        font-size: 1.5rem;
                    }

                    /* button */
                    label {
                        order: 3;
                        width: 100%;
                        margin-right: 0;
                        height: 3rem;

                        a {
                            font-size: 1.3rem;
                        }
                    }

                    img {
                        width: 30%;
                        order: 2;
                        margin-bottom: 2rem;
                    }

                }
                    div#select-options > ol {
                        margin-bottom: 2rem;
                        h2 {
                            font-size: 1.2rem;
                        }
                    }
                }
            }

            section:last-child {
                p {
                    font-size: 1rem;
                }
            }


        }
    }
`;
