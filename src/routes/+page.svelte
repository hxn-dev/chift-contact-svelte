<script>
	import { onMount } from 'svelte';
    import { Datatable } from 'svelte-simple-datatables'

    export let data
    let rows
    let error = false

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
    onMount(() => {
        if (data.records.length <= 0) {
            error = true
            return
        }
        isMounted = true
    })
</script>

<div class="container mx-auto my-8">
    <h1 class="text-4xl">Chift accounts</h1>

    {#if isMounted}
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
    {:else if error}
        <div class="mt-4 py-2 px-4 bg-red-500 text-white uppercase rounded">Error while retrieving accounts</div>
    {/if}
</div>