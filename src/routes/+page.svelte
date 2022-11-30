<script>
	import { onMount } from 'svelte';
    import { Datatable } from 'svelte-simple-datatables'

    export let data
    let rows

    const settings = {
        sortable: true,
        pagination: true,
        rowsPerPage: 10,
        scrollY: false,
        blocks: {
            searchInput: false, 
            paginationButtons: true,
            paginationRowCount: true,
        }
    }

    let isMounted = false
    let error = false
    onMount(() => {
        if (data.records.length <= 0) {
            error = true
            return
        }
        isMounted = true
    })

    const getFlagsByName = (name) => {
        if (name.includes('Belgium')) return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g clip-path="url(#a)"><path fill="#ED4C5C" d="M23.25 12c0-4.912-3.113-9.075-7.5-10.612v21.224c4.387-1.537 7.5-5.7 7.5-10.612Z"/><path fill="#3E4347" d="M.75 12c0 4.913 3.15 9.075 7.5 10.613V1.387C3.9 2.925.75 7.088.75 12Z"/><path fill="#FFE62E" d="M15.75 1.387A11.248 11.248 0 0 0 12 .75c-1.313 0-2.588.225-3.75.637v21.226c1.162.412 2.438.637 3.75.637 1.313 0 2.588-.225 3.75-.637V1.387Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>`
        else if(name.includes('United')) return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g clip-path="url(#a)"><path fill="#ED4C5C" d="M18 2.475C16.238 1.387 14.213.75 12 .75v1.725h6Z"/><path fill="#fff" d="M12 4.2h8.1A13.178 13.178 0 0 0 18 2.475h-6V4.2Z"/><path fill="#ED4C5C" d="M12 5.925h9.488c-.413-.637-.863-1.2-1.35-1.725H12v1.725Z"/><path fill="#fff" d="M12 7.65h10.387c-.262-.6-.562-1.2-.9-1.725H12V7.65Z"/><path fill="#ED4C5C" d="M12 9.375h10.95c-.15-.6-.337-1.163-.563-1.725H12v1.725Z"/><path fill="#fff" d="M12 11.137h11.212c-.037-.6-.15-1.162-.262-1.724H12v1.724Z"/><path fill="#ED4C5C" d="M23.212 11.137H12V12H.75c0 .3 0 .563.037.863h22.425c.038-.3.038-.563.038-.863 0-.3 0-.6-.038-.863Z"/><path fill="#fff" d="M1.05 14.588h21.9c.15-.563.225-1.125.262-1.725H.787c.038.562.113 1.162.263 1.725Z"/><path fill="#ED4C5C" d="M1.612 16.313h20.775c.226-.563.413-1.125.563-1.725H1.05c.15.6.337 1.162.562 1.725Z"/><path fill="#fff" d="M2.512 18.038h18.976c.337-.563.637-1.125.9-1.726H1.611c.263.6.563 1.163.9 1.726Z"/><path fill="#ED4C5C" d="M3.863 19.762h16.274c.488-.524.976-1.125 1.35-1.724H2.514c.375.637.862 1.2 1.35 1.724Z"/><path fill="#fff" d="M5.962 21.488h12.076c.787-.488 1.462-1.088 2.1-1.726H3.861c.638.675 1.35 1.238 2.1 1.726Z"/><path fill="#ED4C5C" d="M12 23.25c2.213 0 4.275-.637 6.038-1.762H5.963A11.157 11.157 0 0 0 12 23.25Z"/><path fill="#428BC1" d="M6 2.475c-.787.487-1.5 1.087-2.138 1.725a9.761 9.761 0 0 0-1.35 1.725c-.337.563-.675 1.125-.9 1.725a13.247 13.247 0 0 0-.562 1.725A8.705 8.705 0 0 0 .787 11.1c-.037.3-.037.6-.037.9H12V.75c-2.213 0-4.237.637-6 1.725Z"/><path fill="#fff" d="m9.375 1.125.188.563h.562l-.45.375.15.562-.45-.337-.45.337.15-.563-.45-.374h.563l.187-.563Zm1.5 2.25.188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.375h.563l.187-.562Zm-3 0 .188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.375h.563l.187-.562Zm1.5 2.25.188.563h.562l-.45.375.15.562-.45-.338-.45.338.15-.563-.45-.375h.563l.187-.562Zm-3 0 .188.563h.562l-.45.375.15.562-.45-.338-.45.338.15-.563-.45-.375h.563l.187-.562Zm-3 0 .188.563h.562l-.45.375.15.562-.45-.338-.45.338.15-.563-.45-.375h.563l.187-.562Zm7.5 2.25.188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.374h.563l.187-.563Zm-3 0 .188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.374h.563l.187-.563Zm-3 0 .188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.374h.563l.187-.563Zm4.5 2.25.188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.374h.563l.187-.563Zm-3 0 .188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.374h.563l.187-.563Zm-3 0 .188.563h.562l-.45.374.15.563-.45-.338-.45.338.15-.563-.45-.374h.563l.187-.563Zm1.05-5.25.45-.338.45.338-.187-.563.45-.375h-.563l-.15-.562-.187.563h-.525l.45.337-.188.6Zm-3 4.5.45-.338.45.338-.187-.563.45-.374h-.525l-.188-.563-.187.563h-.375c0 .037-.038.074-.038.112l.3.225-.15.6Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>`
        else if(name.includes('France')) return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g clip-path="url(#a)"><path fill="#428BC1" d="M.712 12c0 4.913 3.15 9.075 7.5 10.613V1.387C3.862 2.925.712 7.087.712 12Z"/><path fill="#ED4C5C" d="M23.212 12c0-4.912-3.112-9.075-7.5-10.613v21.226c4.388-1.538 7.5-5.7 7.5-10.613Z"/><path fill="#fff" d="M8.212 22.613c1.163.412 2.438.637 3.75.637 1.313 0 2.588-.225 3.75-.637V1.387a11.086 11.086 0 0 0-3.75-.637c-1.35 0-2.587.225-3.75.637v21.226Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>`
        else return ''
    }

    let currentPage = 0
    let accountsPerPage = 6

    const getPagesCount = () => Math.ceil(data.records.length / 6)

    const setCurrentPage = (value) => {
        if (value > getPagesCount() - 1) {
            currentPage = getPagesCount() - 1
            return
        }
        if (currentPage == 0 && value < 0) {
            currentPage = 0
            return
        }
        currentPage = value
    }
    
    $: getRecordsFromOffset = () => {
        const offset = currentPage * accountsPerPage
        return data.records.slice(offset, offset + accountsPerPage)
    }

</script>

{#if error}
<div class="w-screen h-screen flex justify-center items-center">
    <h2 class="text-6xl font-medium">
        Error while retrieving accounts
    </h2>
</div>
{:else if isMounted}
    <div class="container mx-auto my-8">
        <h1 class="text-4xl">Chift accounts</h1>
            <div class="accounts mt-6">
                <Datatable settings={settings} data={data.records} bind:dataRows={rows}>
                    <thead>
                        <th data-key="avatar">Avatar</th>
                        <th data-key="first_name">Name</th>
                        <th data-key="email">Email</th>
                        <th data-key="street">Street</th>
                        <th data-key="zip">Zip Code</th>
                        <th data-key="country">Code & Country</th>
                    </thead>
                    <tbody>
                    {#if rows}
                        {#each $rows as row}
                        <tr>
                            {#if atob(row.avatar_128).includes('<?xml')}
                                <td><img class="avatar mx-auto " src="data:image/svg+xml;base64,{row?.avatar_128}" alt="Avatar"/></td>
                            {:else}
                                <td><img class="avatar mx-auto " src="data:image/png;base64,{row?.avatar_128}" alt="Avatar"/></td>
                            {/if}
                            <td>{row?.name}</td>
                            <td>{row?.email}</td>
                            <td>{row?.street}</td>
                            <td>{row?.zip}</td>
                            <td>{row?.country_id}</td>
                        </tr>
                        {/each}
                    {/if}
                    </tbody>
                </Datatable>
            </div>
    </div>


    <div class="mt-32 bg-gray-100 min-h-screen">
        <div class="container mx-auto pt-8">
            <h1 class="my-8 text-4xl text-center">Chift accounts V2</h1>
            <div class="pagination flex items-center justify-center gap-x-2">
                <button class="py-1 px-4 bg-white text-grey font-semibold rounded-lg shadow-sm {currentPage <= 0 ? 'bg-gray-200 text-gray-400 cursor-default' : ''}" on:click={() => { setCurrentPage(currentPage - 1) }}>Previous</button>
                <div class="hidden md:flex gap-x-2">
                    {#each Array(getPagesCount()) as _, i}
                        <button class="py-1 px-4 bg-white text-grey font-semibold rounded-lg shadow-sm {currentPage == i ? 'bg-gray-200 text-gray-400 cursor-default' : ''}" on:click={() => { setCurrentPage(i) }}>{i + 1}</button>
                    {/each}
                </div>
                <button class="py-1 px-4 bg-white text-grey font-semibold rounded-lg shadow-sm {currentPage >= getPagesCount() -1 ? 'bg-gray-200 text-gray-400 cursor-default' : ''}" on:click={() => { setCurrentPage(currentPage + 1) }}>Next</button>
            </div>
            <div class="accounts-container mt-16 gap-y-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {#each getRecordsFromOffset() as row}
                    <div class="account flex flex-col items-center justify-start relative text-center">
                        <div class="account__logo absolute top-[-30px]">
                            {#if atob(row.avatar_128).includes('<?xml')}
                                <img class="rounded-full w-16 h-16 shadow-md" src="data:image/svg+xml;base64,{row?.avatar_128}" alt="Avatar">
                            {:else}
                                <img class="rounded-full w-16 h-16 bg-white shadow-md" src="data:image/png;base64,{row?.avatar_128}" alt="Avatar">
                            {/if}
                        </div>
                        <div class="account__name shadow-sm pt-12 pb-4 bg-white text-red font-bold uppercase w-full max-w-[325px] lg:max-w-[425px] border-t-4 border-red rounded-lg">
                            {row.name}
                        </div>
                        {#if row?.country_id && row?.zip}
                            <div class="account__country py-2 mt-2 text-grey font-semibold shadow-sm bg-white uppercase w-full max-w-[325px] lg:max-w-[425px] rounded-lg relative">
                                <span class="flag absolute left-[12px]">{@html getFlagsByName(row?.country_id[1])}</span>
                                {row?.zip} {row?.country_id[1]}
                            </div>
                        {/if}
                        {#if row?.street}
                            <div class="account__address py-2 mt-2 text-grey font-semibold shadow-sm bg-white uppercase w-full max-w-[325px] lg:max-w-[425px] rounded-lg relative">
                                <span class="flag absolute top-[11px] left-[12px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#BBB" fill-rule="evenodd" d="M8.784 15.681 9 15.375l-.216.306Zm.432 0h.002l.003-.003.011-.009.045-.032.161-.121a16.27 16.27 0 0 0 2.283-2.164c1.24-1.434 2.529-3.482 2.529-5.824a5.294 5.294 0 0 0-1.537-3.73A5.237 5.237 0 0 0 6.99 2.652a5.235 5.235 0 0 0-1.702 1.144A5.294 5.294 0 0 0 3.75 7.529c0 2.34 1.288 4.389 2.529 5.823a16.271 16.271 0 0 0 2.283 2.164l.205.154.012.008.004.003h.001c.13.092.303.092.432 0ZM9 15.375l.216.306L9 15.375ZM10.875 7.5a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Z" clip-rule="evenodd"/></svg></span>
                                {row?.street}
                            </div>
                        {/if}
                        <div class="account__email py-2 mt-2 text-grey font-semibold shadow-sm bg-white w-full max-w-[325px] lg:max-w-[425px] rounded-lg relative border-b-4 border-red">
                            <span class="flag absolute top-[11px] left-[12px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#BBB" d="M9 16.5a7.253 7.253 0 0 1-2.906-.591 7.594 7.594 0 0 1-2.39-1.613 7.593 7.593 0 0 1-1.613-2.39A7.253 7.253 0 0 1 1.5 9c0-1.037.197-2.01.591-2.915.393-.907.931-1.7 1.612-2.381a7.605 7.605 0 0 1 2.39-1.614A7.26 7.26 0 0 1 9 1.5c1.037 0 2.01.197 2.915.59a7.623 7.623 0 0 1 3.994 3.994A7.23 7.23 0 0 1 16.5 9v1.088c0 .737-.253 1.365-.759 1.884a2.506 2.506 0 0 1-1.866.778c-.45 0-.869-.1-1.256-.3a2.815 2.815 0 0 1-.957-.787A3.728 3.728 0 0 1 9 12.75a3.613 3.613 0 0 1-2.653-1.097C5.616 10.922 5.25 10.037 5.25 9s.366-1.922 1.097-2.654C7.078 5.617 7.962 5.25 9 5.25c1.037 0 1.922.365 2.653 1.096A3.616 3.616 0 0 1 12.75 9v1.088c0 .362.113.646.338.852.225.207.487.31.787.31.3 0 .563-.103.787-.31.225-.206.338-.49.338-.852V9c0-1.638-.59-3.047-1.772-4.229C12.047 3.591 10.638 3 9 3s-3.047.59-4.229 1.771C3.591 5.954 3 7.362 3 9c0 1.637.59 3.047 1.771 4.228C5.954 14.409 7.362 15 9 15h3.75v1.5H9Zm0-5.25a2.17 2.17 0 0 0 1.594-.656A2.17 2.17 0 0 0 11.25 9a2.17 2.17 0 0 0-.656-1.594A2.17 2.17 0 0 0 9 6.75a2.17 2.17 0 0 0-1.594.656A2.17 2.17 0 0 0 6.75 9c0 .625.219 1.156.656 1.594A2.17 2.17 0 0 0 9 11.25Z"/></svg></span>
                            {row?.email}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}